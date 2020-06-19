$(document).ready(function () {
    var tracks_api = 'https://api.jsonbin.io/b/5eafd4ca47a2266b1472794c'
    var auth_api   = 'https://nilepromotion.com/pa-test/wp-json/test/v2/creds?%20username=%7busername%7d&password=%7bpassword%7d'
    $.ajaxSetup ({
        cache: false
    });
         $.ajax({
        'url' :tracks_api ,
        'method':'get',
        processData: false,
        'enctype': 'multipart/form-data',
        'contentType': false,
        'success' :function (data) {
              newdata=data.tracks
           // console.log(newdata.length)
             for (i=0 ;i<=newdata.length;i++) {
                output=newdata[i];
                 //console.log(output.name)
                 $("#forminput").append(
                     '<img src="music-solid.svg" class="imgclass"/>'+
                     '<input type="checkbox" id="outputApi" name="song" checked>'+
                     '<p id="url" hidden> '+ output.url+'</p>'+
                     '<label for="song1" class="chk" id="songname">'+output.name+'</label><br>'
                 );
             }
        },
    })
        $('#downloadbtn').on( 'submit click',function (e) {
            e.preventDefault();
            e.stopPropagation();
             if($('#outputApi').is(':checked')) {
                  $('#error').empty()
                  $('.cont2').css({
                      display: 'block',
                  })
                  // document.getElementById("outputApi").setAttribute('unchecked','unchecked')
              }else if( ! $('#outputApi').is(':checked') &&  $('#error').empty()){
                  str="Kindly Check one or more song to download"
                  $('#error').append('<p id="error">' +str+'</p>')

              }

        });
$('#loginbtn').on('click' ,function (ele) {
    ele.preventDefault();
    ele.stopPropagation();
    var username=$("#user").val()
    var pass=$("#pass").val()


        if (username == "") {
            str2 = "you didn't Enter your User name "
            $('#error2').append('<p id="error2">' + str2 + '</p>')
            if (pass == "") {
                str3 = "you didn't Enter your  password"
                $('#error3').append('<p id="error3">' + str3 + '</p>')
            }
        } else {
            $.ajax({
                url: "https://nilepromotion.com/pa-test/wp-json/test/v2/creds?%20username=leap13&password=leap13pass",
                cache: false,
                method: "get",

                success: function (response) {
                    console.log(response)
                    users_data = response.username
                    user_pass = response.password
                    if (username == users_data) {
                        document.getElementById("our-username").innerHTML += username + "<br>";
                        if (pass == user_pass) {
                            document.getElementById("our-password").innerHTML += pass + "<br>";
                            sessionStorage.setItem('username', 'leap13')
                            //   var usersession= sessionStorage.getItem('username')
                            //  var loginsession = "<?php $_SESSION[usersession] ?>"
                            if (sessionStorage.getItem('username') != "") {
                                // console.log('hello banij')
                                //  console.log(document.getElementById('url').innerText)
                                var click='Click here'
                                // $('#down').append(
                                //     '<a class="music-preview" href="'+document.getElementById('url').innerText+'" target="_blank">'
                                //     + click +'</a>'
                                // )
                                /////////////////////////////////////////////////


                                $.ajax({
                                    'url' :tracks_api ,
                                    'method':'get',
                                    processData: false,
                                    'enctype': 'multipart/form-data',
                                    'contentType': false,
                                    'success' :function (data) {
                                        newdata=data.tracks
                                        for (i=0 ;i<=newdata.length;i++) {
                                            output=newdata[i];
                                            //console.log(output.name)
                                            $("#down").append(

                                                '<a class="btn btn-outline-info" href="'+output.url+'" target="_blank" download="'+output.url+'">'
                                                 +'Listen to'+output.name+'</a>'+
                                                '<a class="btn btn-outline-primary" href="#" target="_blank" download="'+output.url+'">'
                                                +'<img src="down.svg" class="imgclass"/>'+ output.name+'</a>'
                                        );
                                        }

                                    },
                                })

                               ///////////////////////////////////////////////////
                                $('.cont2').css({
                                    display: 'none',
                                })
                                $('#down').css({
                                    display: 'block',
                                    marginLeft: ' 5%',
                                    borderRadius: '20px solid blue',
                                    // height: '105px',
                                    // marginTop: '83px',
                                    // backgroundColor: 'green',
                                    lineHeight: '45px'
                                });


                            } else {
                                alert('please login first to start download')
                            }
                        } else {
                            str3 = "Wrong password"
                            $('#error3').append('<p id="error3">' + str3 + '</p>')
                        }
                    } else {
                        str2 = "Wrong username "
                        $('#error2').append('<p id="error2">' + str2 + '</p>')
                    }


                }

            });
        }

})
})