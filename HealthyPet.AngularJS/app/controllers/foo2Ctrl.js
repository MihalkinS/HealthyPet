vetApp.controller('foo2Ctrl', function ($scope) {

    $scope.currWeek = {
        startDay: 22,
        startMonth: '02',
        finishDay: 28,
        finishMonth: '02'
    };

    $scope.countOfDoctors = 2;

    $scope.currYear = 2016;

    $scope.massOfBusyTime = [
    {
        hour: '7',
        minutes: '00',
        doctors: [
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        }]
    },
    {
        hour: '7',
        minutes: '15',
        doctors: [
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'busy'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'busy'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        }]
    },
    {
        hour: '7',
        minutes: '30',
        doctors: [
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        }]
    },
    {
        hour: '7',
        minutes: '45',
        doctors: [
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'busy'
        },
        {
            id: 29,
            status: 'busy'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        },
        {
            id: 29,
            status: 'free'
        },
        {
            id: 15,
            status: 'free'
        }]
    }
    ];

    $scope.listOfDoctors = [
        {
            id: 29,
            name: 'Белохалатов',
            avatar: '../content/img/Белохалатов.jpg'
        },
        {
            id: 15,
            name: 'Твердорукова',
            avatar: '../content/img/Твердорукова.jpg'
        }        
    ];

});