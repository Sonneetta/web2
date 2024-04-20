var DataView = {
    renderData: function(data) {
        var resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');

        var resultHTML = `
            <h2>Ваші введені дані:</h2>
            <p><strong>Країна:</strong> ${data.country}</p>
            <p><strong>Місто:</strong> ${data.city}</p>
            <p><strong>Якість харчування:</strong> ${data.foodQuality}</p>
            <p><strong>Якість транспорту:</strong> ${data.transportQuality}</p>
            <p><strong>Задоволеність екскурсіями:</strong> ${data.excursionsSatisfaction}</p>
            <p><strong>Рекомендація:</strong> ${data.recommendation}</p>
            <p><strong>Витрати на подорож:</strong> ${data.question2}</p>
            <p><strong>Оцінка подорожі:</strong> ${data.question1}</p>
            <p><strong>Враження:</strong> ${data.impressions}</p>
        `;

        resultContainer.innerHTML = resultHTML;

        return resultContainer;
    }
};