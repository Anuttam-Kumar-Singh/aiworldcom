async function search() {
  const query = document.getElementById("query").value;
  const answerDiv = document.getElementById("answer");
  const resultsDiv = document.getElementById("results");

  answerDiv.innerHTML = "Thinking...";
  resultsDiv.innerHTML = "";

  try {
    // Example: Call an AI API (replace with your backend or OpenAI)
    // Here we'll just fake an answer for demo
    const fakeAnswer = `Here’s an AI-powered summary for: <b>${query}</b>`;
    const fakeResults = [
      { title: "Result 1", link: "#", snippet: "This is a snippet about your query." },
      { title: "Result 2", link: "#", snippet: "Another relevant snippet here." }
    ];

    // Show answer
    answerDiv.innerHTML = fakeAnswer;

    // Show results
    fakeResults.forEach(r => {
      const div = document.createElement("div");
      div.classList.add("result");
      div.innerHTML = `<h3><a href="${r.link}" target="_blank">${r.title}</a></h3>
                       <p>${r.snippet}</p>`;
      resultsDiv.appendChild(div);
    });

  } catch (err) {
    answerDiv.innerHTML = "Error fetching results.";
    console.error(err);
  }
}