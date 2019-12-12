$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var sentenceInput = $("input#sentence").val();

    var wordsInSentence = sentenceInput.split(' ');
    console.log(wordsInSentence);

    var wordsOverThree = wordsInSentence.map(function(word) {
      if (word.length >= 3) {
        return word;
      }
    });
    console.log(wordsOverThree);

    $("#output").text(wordsOverThree.reverse().join(' ')).show();

  });
});
