
<!DOCTYPE html>
<html>
<head>
    <title> TasK</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
<!--    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>-->
<!--    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>-->
<!--    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>-->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
 </head>
<body>
<div class="container">
    <div class="row">
        <div class="col-lg-6 cont1">
            <h1 class="title"> Download your favourite Audio </h1>
            <h1 class="check"> available Audio kindly submit to login first</h1>
            <form class="col-lg-6 ml-5" method ="post" action="check_login.php">
                   <div id="forminput">
                   </div>

                <div id="selected-item"></div>
                <div id="error"></div>
                <input type="submit" value="download song" class="mt-3 btn btn-info mb-5" id="downloadbtn">
            </form>
        </div>

        <div class=" col-lg-5" id="down" >
            <h5 id="text1"> now you can lisen to the music you want  </h5>
<!--            <div id="preview"></div>-->
        </div>
        <div class="col-lg-5 cont2 form-group" >
            <form class="col-lg-8 ml-5 mt-5" method="post" enctype="application/x-www-form-urlencoded">
                <label for="username" class="uname">user name</label>
                <input type="text" name="username" class="form-control mx-auto" id="user" placeholder="Enter yourUser Name">
                <div id="error2"></div>
                <br>
                <label for="password" class="pass">password </label>
                <input type="text" name="password" class="form-control mx-auto " id="pass" placeholder="Enter yourUser Name" placeholder="Enter password">
                <div id="error3"></div>
                <br>

                <input type="submit" value="login to download" class="mt-3 btn btn-info mb-5 " id="loginbtn" style="margin-left: 32%;">
            </form>
        </div>
    </div>
</div>
<p id="our-username" hidden></p>
<p id="our-password" hidden></p>
<script src="script.js"></script>
<?php @include('check_login.php')?>
</body>
</html>
