import { test } from "node:test";
import assert from "node:assert/strict";
import { chromium } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
const baseUrl = process.env.TEST_BASE_URL ?? "http://127.0.0.1:5174";
test("landing: desktop, keyboard booking, gallery, mobile and accessibility", async () => {
  const browser = await chromium.launch({ headless: true, channel: "chrome" });
  try {
    const context = await browser.newContext({
      viewport: { width: 1440, height: 960 },
    });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(baseUrl);
    await page.locator(".hero__image").waitFor();
    await page.evaluate(() => document.fonts.ready);
    assert.equal(await page.locator("h1").count(), 1);
    assert.equal(
      await page.getByText("Corte e Barba", { exact: true }).count(),
      1,
    );
    assert.match(await page.locator(".services").innerText(), /R\$\s*125/);
    assert.doesNotMatch(
      await page.locator("body").innerText(),
      /portfólio|portifólio|fictício|ilustrativo|demonstrativo|simulação/i,
    );
    assert.equal(await page.locator(".service").count(), 13);
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
    );
    await page.screenshot({
      path: "/tmp/monumental-desktop.png",
      fullPage: true,
    });
    await page.route("https://sites.appbarber.com.br/**", (route) =>
      route.fulfill({ contentType: "text/html", body: "<h1>AppBarber</h1>" }),
    );
    for (const name of ["Agendar no AppBarber", "Escolher serviço"]) {
      await page.getByRole("button", { name, exact: true }).last().click();
      assert.equal(
        page.url(),
        "https://sites.appbarber.com.br/monumentalbarbe-m9fd",
      );
      await page.goto(baseUrl);
    }
    await page.locator(".location-scene").scrollIntoViewIfNeeded();
    await page.waitForFunction(
      () => document.querySelector(".location-scene__image")?.naturalWidth > 0,
    );
    await page
      .getByRole("button", { name: "Pausar animação da localização" })
      .click();
    assert.equal(
      await page
        .locator(".location-scene__image")
        .evaluate((el) => getComputedStyle(el).animationPlayState),
      "paused",
    );
    await page.emulateMedia({ reducedMotion: "reduce" });
    assert.equal(
      await page
        .locator(".location-scene__image")
        .evaluate((el) => getComputedStyle(el).animationName),
      "none",
    );
    await page.emulateMedia({ reducedMotion: "no-preference" });
    await page.getByRole("button", { name: "Próxima foto" }).click();
    assert.equal(
      await page.locator('.proof__thumbs button[aria-pressed="true"]').count(),
      1,
    );
    await page.evaluate(() => scrollTo(0, 1000));
    await page.locator(".header--scrolled").waitFor();
    assert.deepEqual(
      (await new AxeBuilder({ page }).analyze()).violations.map((item) => ({
        id: item.id,
        nodes: item.nodes.map((node) => node.target),
      })),
      [],
    );
    await page.setViewportSize({ width: 390, height: 844 });
    await page.evaluate(() => scrollTo(0, 0));
    await page.getByRole("button", { name: "Abrir menu" }).click();
    await page.getByRole("link", { name: "Serviços", exact: true }).click();
    assert.equal(
      await page
        .getByRole("button", { name: "Abrir menu" })
        .getAttribute("aria-expanded"),
      "false",
    );
    assert.equal(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
      true,
    );
    await page.screenshot({
      path: "/tmp/monumental-mobile.png",
      fullPage: true,
    });
    assert.deepEqual(errors, []);
  } finally {
    await browser.close();
  }
});
