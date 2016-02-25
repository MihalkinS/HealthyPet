vetApp.controller('fooCtrl', function ($scope) {


    $scope.curr = 1;

    $scope.month = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь'
    ];
    
    $scope.currDaysInMonth = [];

    $scope.daysInFebruary = {
        before: [
            31
        ],
        inMonth: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
            11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
            21, 22, 23, 24, 25, 26, 27, 28, 29
        ],
        after: [
            1, 2, 3, 4, 5
        ]
    }

    
    $scope.convertDaysFromResponse = function convertResponseToMass() {
        for (var i = 0; i < $scope.daysInFebruary.before.length; i++) {
            $scope.currDaysInMonth.push($scope.daysInFebruary.before[i]);
        };
        for (var i = 0; i < $scope.daysInFebruary.inMonth.length; i++) {
            $scope.currDaysInMonth.push($scope.daysInFebruary.inMonth[i]);
        };
        for (var i = 0; i < $scope.daysInFebruary.after.length; i++) {
            $scope.currDaysInMonth.push($scope.daysInFebruary.after[i]);
        };
    };

    $scope.year = 2016;

    $scope.currMonthUp = function () {
        if ($scope.curr === 12) {
            $scope.curr = 1;
            $scope.year++;
        }
        else $scope.curr++;
    };

    $scope.currMonthDown = function () {
        if ($scope.curr === 1) {
            $scope.curr = 12;
            $scope.year--;
        }
        else $scope.curr--;
    };






});