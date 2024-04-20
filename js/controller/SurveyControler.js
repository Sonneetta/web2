var DataController = {
    init: function() {
        var form = document.querySelector('form');

        form.addEventListener('submit', function(event) {
            event.preventDefault();

            var data = {
                country: document.getElementById('country').value,
                city: document.getElementById('city').value,
                foodQuality: document.querySelector('input[name="foodQuality"]:checked').value,
                transportQuality: document.querySelector('input[name="transportQuality"]:checked').value,
                excursionsSatisfaction: document.querySelector('input[name="excursionsSatisfaction"]:checked').value,
                recommendation: document.querySelector('input[name="recommendation"]:checked').value,
                question2: document.getElementById('question2').value,
                question1: document.getElementById('question1').value,
                impressions: document.getElementById('impressions').value
            };

            DataModel.saveData(data);

            document.getElementById('showResultsButton').style.display = 'block';

            form.reset();
        });

      
        document.getElementById('showResultsButton').addEventListener('click', function() {
            var previousData = DataModel.getData();
            if (previousData) {
                var resultContainer = DataView.renderData(previousData);
                form.parentNode.insertBefore(resultContainer, form.nextSibling);
            } else {
                alert('Немає збережених даних про опитування.');
            }
        });
    }
};


DataController.init();