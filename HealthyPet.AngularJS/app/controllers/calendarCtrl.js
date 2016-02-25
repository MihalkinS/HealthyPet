﻿vetApp.controller('calendarCtrl', function ($scope) {

    

    $scope.currWeek = {
        year: 2016,
        weekid: 60,
        weekDays: [
            '22.02',
            '23.02',
            '24.02',
            '25.02',
            '26.02',
            '27.02',
            '28.02'
        ]

    };

    $scope.typeOfUser = 'doctor';
    $scope.typeOfUser1 = 'anonym';
    $scope.typeOfUser2 = 'client';

    $scope.week = [
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота',
        'Воскресенье'
    ];

    $scope.allTimeOfDay = [
        {
            hour: '7',
            minutes: '00'
        },
        {
            hour: '7',
            minutes: '15'
        },
        {
            hour: '7',
            minutes: '30'
        },
        {
            hour: '7',
            minutes: '45'
        },
        {
            hour: '8',
            minutes: '00'
        },
        {
            hour: '8',
            minutes: '15'
        }
    ];

    $scope.mondayTime = [
        'busy',
        'free',
        'free',
        'notConfirmed',
        'free',
        'busy'
    ];

    $scope.tuesdayTime = [
        'busy',
        'free',
        'notConfirmed',
        'notConfirmed',
        'notConfirmed',
        'free'
    ];

    $scope.wednesdayTime = [
        'busy',
        'free',
        'free',
        'notConfirmed',
        'free',
        'free'
    ];

    $scope.thursdayTime = [
        'busy',
        'busy',
        'free',
        'notConfirmed',
        'free',
        'free'
    ];

    $scope.fridayTime = [
        'free',
        'busy',
        'free',
        'notConfirmed',
        'free',
        'busy'
    ];

    $scope.saturdayTime = [
        'busy',
        'free',
        'free',
        'notConfirmed',
        'free',
        'free'
    ];

    $scope.sundayTime = [
        'busy',
        'free',
        'free',
        'notConfirmed',
        'free',
        'free'
    ];

    $scope.currWeek1 = {
        year: 2016,
        weekid: 60,
        monday: '22.02',
        tuesday: '23.02',
        wednesday: '24.02',
        thursday: '25.02',
        friday: '26.02',
        saturday: '27.02',
        sunday: '28.02'
    };

    $scope.weekEn = [
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
    ];

});