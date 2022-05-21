           let btnSuccess = document.querySelector('#success');

           btnSucess.addEventListener('click', () ==> btnSuccess.style.backgroundColor= '#337ab7')

            $(document).ready(function () {
            

            // Load 1



            $('#ft-trim-1').on('input', function () {
                var value1 = parseFloat($('#ft-trim-1').val());
                $('#ft-tm-1').val((value1).toFixed(0));
                $('#ft-w-1').trigger('click');
                $('#ft-tdr-1').trigger('click');
            });



            $('#ft-dhp-1').on('input', function () {
                var value1 = parseFloat($('#ft-trim-1').val());
                var value2 = parseFloat($('#ft-dhp-1').val());
                $('#ft-tm-1').val((value1 + value2).toFixed(0));
                $('#ft-w-1').trigger('click');
                $('#ft-tdr-1').trigger('click');
            });

            $('#ft-dhd-1').on('input', function () {
                var value1 = parseFloat($('#ft-trim-1').val());
                var value2 = parseFloat($('#ft-dhp-1').val());
                var value3 = parseFloat($('#ft-dhd-1').val());
                $('#ft-tm-1').val((value1 + value2 + value3).toFixed(0));
                $('#ft-w-1').trigger('click');
                $('#ft-tdr-1').trigger('click');
            })

            $('#ft-dhd-1 #ft-dhd-1 #ft-trim-1 #ft-dhd-1').on('input change', function () {
                $('#ft-w-1').trigger('click');
                $('#ft-trpm-1').trigger('click');
                $('#ft-rpm-1').trigger('click');
                $('#ft-fc-1').trigger('input');
                $('#ft-tr-1').trigger('click');
            })

            $('#ft-dhd-1').on('update', function () {
                $('#ft-w-1').trigger('click');
            })


            $('#ft-w-1').on('input click', function () {
                var weight = parseFloat($('#ft-w-1').val());
                var fuelReductionValue = (weight / 1000) * 0.005;
                var fuelReductionDisplay = Math.round(fuelReductionValue * 100);
                $('#ft-fr-1').val(fuelReductionDisplay);
                $('#ft-frh-1').val(fuelReductionValue);
                $('#ft-fc-1').trigger('input');
                $('#ft-rpm-1').trigger('click');
                $('#ft-tdr-1').trigger('click');
                $('.total1').trigger('click');
            })

            $('#ft-fc-1').on('input', function () {
                var weight = parseFloat($('#ft-w-1').val());
                var fuelReduction = parseFloat($('#ft-frh-1').val());
                var totalMiles = parseFloat($('#ft-tm-1').val());
                var avgMiles = parseFloat($('#avg-mile-per-gallon').val());
                var fuelPrice = parseFloat($('#current-gas-price').val());
                var fuelCost = (totalMiles / (avgMiles * (1 - fuelReduction)) * fuelPrice).toFixed(2);
                $('#ft-fc-1').val(fuelCost);
                $('#ft-tr-1').trigger('click');
            })

            $('#ft-tr-1').on('click', function () {
                var rate = parseFloat($('#ft-r-1').val());
                var totalMiles = parseFloat($('#ft-tm-1').val());
                var fuelCost = parseFloat($('#ft-fc-1').val());
                $('#ft-tr-1').val(((rate) - (fuelCost)).toFixed(2));
                $('#ft-trpm-1').trigger('click');
            })

            $('#ft-r-1').on('input', function () {
                $('#ft-rpm-1').trigger('click');
                $('#ft-tr-1').trigger('click');
                $('#ft-tdr-1').trigger('click');
                $('.total1').trigger('click');
            })


            $('#ft-trpm-1').on('click', function () {
                var totalMiles = parseFloat($('#ft-tm-1').val());
                var trueRate = parseFloat($('#ft-tr-1').val());
                $('#ft-trpm-1').val(((trueRate) / (totalMiles)).toFixed(2));

            })

          //  $('#ft-tdr-1').on('click', function () {
    //            var trueRate = parseFloat($('#ft-tr-1').val());
    //            var days = parseFloat($('#ft-d-1').val());
    //            $('#ft-tdr-1').val(((trueRate) / (days)).toFixed(2));
    //            $('#ft-rpm-1').trigger('click')
    //        })


            $('#ft-d-1').on('input', function () {
                $('#ft-tdr-1').trigger('click');
                $('.total1').trigger('click');
            })


            $('#ft-rpm-1').on('click', function () {
                var rate = parseFloat($('#ft-r-1').val());
                var totalMiles = parseFloat($('#ft-tm-1').val());
                $('#ft-rpm-1').val(((rate) / (totalMiles)).toFixed(2));
            })




            ////
            //   working
            ///////

            // Load 2


            $('#ft-trim-2').on('input', function () {
                var value1 = parseFloat($('#ft-trim-2').val());
                $('#ft-tm-2').val((value1).toFixed(0));
                $('#ft-w-2').trigger('click');
                $('#ft-tdr-2').trigger('click');
            });



            $('#ft-dhp-2').on('input', function () {
                var value1 = parseFloat($('#ft-trim-2').val());
                var value2 = parseFloat($('#ft-dhp-2').val());
                $('#ft-tm-2').val((value1 + value2).toFixed(0));
                $('#ft-w-2').trigger('click');
                $('#ft-tdr-2').trigger('click');
            });

            $('#ft-dhd-2').on('input', function () {
                var value1 = parseFloat($('#ft-trim-2').val());
                var value2 = parseFloat($('#ft-dhp-2').val());
                var value3 = parseFloat($('#ft-dhd-2').val());
                $('#ft-tm-2').val((value1 + value2 + value3).toFixed(0));
                $('#ft-w-2').trigger('click');
                $('#ft-tdr-2').trigger('click');
            })

            $('#ft-dhd-2 #ft-dhd-2 #ft-trim-2 #ft-dhd-2').on('input change', function () {
                $('#ft-w-2').trigger('click');
                $('#ft-trpm-2').trigger('click');
                $('#ft-rpm-2').trigger('click');
                $('#ft-fc-2').trigger('input');
                $('#ft-tr-2').trigger('click');
            })

            $('#ft-dhd-2').on('update', function () {
                $('#ft-w-2').trigger('click');
            })


            $('#ft-w-2').on('input', function () {
                var weight = parseFloat($('#ft-w-2').val());
                var fuelReductionValue = (weight / 1000) * 0.005;
                var fuelReductionDisplay = Math.round(fuelReductionValue * 100);
                $('#ft-fr-2').val(fuelReductionDisplay);
                $('#ft-frh-2').val(fuelReductionValue);
                $('#ft-fc-2').trigger('input');
                $('#ft-rpm-2').trigger('click');
                $('#ft-tdr-2').trigger('click');
                $('.total1').trigger('click');
            })


            $('#ft-fc-2').on('input', function () {
                var weight = parseFloat($('#ft-w-2').val());
                var fuelReduction = parseFloat($('#ft-frh-2').val());
                var totalMiles = parseFloat($('#ft-tm-2').val());
                var avgMiles = parseFloat($('#avg-mile-per-gallon').val());
                var fuelPrice = parseFloat($('#current-gas-price').val());
                var fuelCost = (totalMiles / (avgMiles * (1 - fuelReduction)) * fuelPrice).toFixed(2);
                $('#ft-fc-2').val(fuelCost);
                $('#ft-tr-2').trigger('click');
            })

            $('#ft-tr-2').on('click', function () {
                var rate = parseFloat($('#ft-r-2').val());
                var totalMiles = parseFloat($('#ft-tm-2').val());
                var fuelCost = parseFloat($('#ft-fc-2').val());
                $('#ft-tr-2').val(((rate) - (fuelCost)).toFixed(2));
                $('#ft-trpm-2').trigger('click');
            })

            $('#ft-r-2').on('input', function () {
                $('#ft-rpm-2').trigger('click');
                $('#ft-tr-2').trigger('click');
                $('#ft-tdr-2').trigger('click');
                $('.total1').trigger('click');
            })


            $('#ft-trpm-2').on('click', function () {
                var totalMiles = parseFloat($('#ft-tm-2').val());
                var trueRate = parseFloat($('#ft-tr-2').val());
                $('#ft-trpm-2').val(((trueRate) / (totalMiles)).toFixed(2));

            })

       //     $('#ft-tdr-2').on('click', function () {
       //         var trueRate = parseFloat($('#ft-tr-2').val());
       //         var days = parseFloat($('#ft-d-2').val());
        //        $('#ft-tdr-2').val(((trueRate) / (days)).toFixed(2));
       //         $('#ft-rpm-2').trigger('click')
       //     })


            $('#ft-d-2').on('input', function () {
                $('#ft-tdr-2').trigger('click');
                $('.total1').trigger('click');
                $('.check-color').trigger('click');
            })


            $('#ft-rpm-2').on('click', function () {
                var rate = parseFloat($('#ft-r-2').val());
                var totalMiles = parseFloat($('#ft-tm-2').val());
                $('#ft-rpm-2').val(((rate) / (totalMiles)).toFixed(2));
            })

            ////final


            ///////// calculate total 1#





            $('.total1').on('click', function () {

                var max1 = parseFloat($('#ft-trpm-1').val());
                var max2 = parseFloat($('#ft-trpm-2').val());
                if (max1 > max2) {
                    $('#f-trpm').val((max1).toFixed(2));
                    $('#ft-trpm-1').addClass('dark-green');
                    $('#ft-trpm-2').removeClass('dark-green');

                } if(max2>max1) {
                    $('#f-trpm').val((max2).toFixed(2));
                    $('#ft-trpm-2').addClass('dark-green');
                    $('#ft-trpm-1').removeClass('dark-green');

                }

            })

            $('.total1').on('click', function () {
                var max3 = parseFloat($('#ft-tdr-1').val())
                var max4 = parseFloat($('#ft-tdr-2').val());
                if (max3 > max4) {
                    $('#f-trpd').val((max3).toFixed(2));
                    $('#ft-tdr-1').addClass('dark-green');
                    $('#ft-tdr-2').removeClass('dark-green');

                } if(max4>max3) {
                    $('#f-trpd').val((max4).toFixed(2));
                    $('#ft-tdr-2').addClass('dark-green');
                    $('#ft-tdr-1').removeClass('dark-green');

                }
            })

            $('.total1').on('click', function () {
                var max5 = parseFloat($('#ft-tr-1').val());
                var max6 = parseFloat($('#ft-tr-2').val());
                if (max5 > max6) {
                    $('#f-ttr').val((max5).toFixed(2));
                    $('#ft-tr-1').addClass('dark-green');
                    $('#ft-tr-2').removeClass('dark-green');

                } if(max6>max5){

                    $('#f-ttr').val((max6).toFixed(2));
                    $('#ft-tr-2').addClass('dark-green');
                    $('#ft-tr-1').removeClass('dark-green');
                }

            })
                        
    function calculateDay(){
    var pd1= document.getElementById("pd1").value;
    var dd1= document.getElementById("dd1").value;
    var pd2= document.getElementById("pd2").value;
    var dd2= document.getElementById("dd2").value;
    const dateOne = new Date(pd1);
    const dateTwo = new Date(dd1);
    const dateThree = new Date(pd2);
    const dateFour = new Date(dd2);
    const time = Math.abs(dateTwo - dateOne);
    const days = Math.abs(time / (1000 * 60 * 60 * 24));
    document.getElementByID("output1").innerHTML=days;
    const time = Math.abs(dateThree - dateFour);
    const days = Math.abs(time / (1000 * 60 * 60 * 24));
    document.getElementByID("output2").innerHTML=days;
    }



            // $('#check-color').on('click', function () {

            //     var value1 = $('#ft-trpm-1').val();
            //     var value2 = $('#ft-trpm-1').val();
            //     if (value1 > value2) {
            //         $('#ft-trpm-1').addClass('dark-green');
            //     }
            //     if (value1 < value2) {
            //         $('#ft-trpm-2').addClass('dark-green');
            //         $('#ft-trpm-1').removeClass('dark-green');
            //     }

            //     var value3 = $('#ft-tdr-1').val();
            //     var value4 = $('#ft-tdr-2').val();
            //     if (value3 > value4) {
            //         $('#ft-tdr-1').addClass('dark-green');
            //     }
            //     if (value3 < value4) {
            //         $('#ft-tdr-2').addClass('dark-green');
            //         $('#ft-tdr-1').removeClass('dark-green');
            //     }

            //     var value5 = $('#ft-tr-1').val();
            //     var value6 = $('#ft-tr-2').val();
            //     if (value5 > value6) {
            //         $('#ft-tr-1').addClass('dark-green');
            //     }
            //     if (value5 < value6) {
            //         $('#ft-tr-2').addClass('dark-green');
            //         $('#ft-tr-1').removeClass('dark-green');
            //     }

                
            // })

        });
