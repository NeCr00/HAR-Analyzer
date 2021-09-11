
<?php include('navbar.php'); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <title>Upload Har File</title>
    <link rel="stylesheet" href="fileUpload.css">
    <script defer src="fileUpload.js"></script>
    
</head>

<body>

    <div class=container>

        <div class=upload-container>
            <h1> Upload HAR File </h1>
            <label> Select Har File :</label>
            <input id="harFile" type="file" name="harFile" />


            <div class=checkbox-container>
                <h2>Select an option</h2>
                <div>
                    <label class="">Upload File to System
                        <input type="checkbox" checked="checked" id= checkbox1>
                        <span class="checkmark"></span>
                    </label>
                    <label class="">Upload File Locally
                        <input type="checkbox" id= checkbox2>
                        <span class="checkmark"></span>
                    </label>
                    <div class = alert id=alert> </div>
                </div>
                <button id="upload" class=myButton>Upload</button>
            </div>
            
        </div>

      

    </div>
</body>


</html>