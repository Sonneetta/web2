var DataModel = {
    saveData: function(data) {
        localStorage.setItem('surveyData', JSON.stringify(data));
    },
    getData: function() {
        var data = localStorage.getItem('surveyData');
        return data ? JSON.parse(data) : null;
    },
    clearData: function() {
        localStorage.removeItem('surveyData');
    }
};
