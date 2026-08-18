async function translateText() {
  const text = document.getElementById("inputText").value.trim();
  const from = document.getElementById("fromLang").value;
  const to = document.getElementById("toLang").value;
  const output = document.getElementById("outputText");

  if (!text) {
    output.value = "Please enter text to translate.";
    return;
  }

  if (from === to) {
    output.value = text;
    return;
  }

  output.value = "Translating...";

  try {
    const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
      text
    )}&langpair=${from}|${to}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("API request failed");
    }

    const data = await response.json();

    console.log(data); // useful for debugging

    if (
      data.responseData &&
      data.responseData.translatedText
    ) {
      output.value = data.responseData.translatedText;
    } else {
      output.value = "Translation failed.";
    }
  } catch (error) {
    console.error(error);
    output.value = "Error translating text.";
  }
}