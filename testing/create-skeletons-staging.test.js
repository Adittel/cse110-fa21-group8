describe("Basic user flow for Website", () => {
  // First, visit the website
  beforeAll(async () => {
    await page.goto(
      "https://testing.tianyuezhang1997.site/cse110-fa21-group8/create-skeletons-staging/source/"
    );
  });

  it("Initial Home Page - Check if there is any console log error", async () => {});
  page.on("console", (message) => {
    const logMsg =
      message.type() + " " + message.location().url + " " + message.text();
    const logType = message.type();
    if (logType === "error") {
      console.log(logMsg);
    }
    expect(message.type()).not.toBe("error");
  });

  it("Check ingredients checkbox can be clicked", async () => {
    //click ingredient 1
    let button1 = await page.$("#ingredient1");
    await button1.click();
    //click ingredient 2
    let button2 = await page.$("#ingredient2");
    await button2.click();
    //click ingredient 3
    let button3 = await page.$("#ingredient3");
    await button3.click();

    expect(button1.checked).toBe(true);
    expect(button1.checked).toBe(true);
    expect(button1.checked).toBe(true);
  });


});
