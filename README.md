<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image to Text Converter</title>
    <style>
        .input_file {
            z-index: 999;
            opacity: 0;
            width: 320px;
            height: 200px;
            position: absolute;
            right: 0px;
            left: 0px;
            margin-right: auto;
            margin-left: auto;
        }

        .Neon {
            font-family: sans-serif;
            font-size: 14px;
            color: #494949;
            position: relative;
        }

        .Neon * {
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
        }

        .Neon-input-dragDrop {
            display: block;
            width: 343px;
            margin: 0 auto 25px auto;
            padding: 25px;
            color: #8d9499;
            color: #97a1a8;
            background: #fff;
            border: 2px dashed #c8cbce;
            text-align: center;
            -webkit-transition: box-shadow 0.3s, border-color 0.3s;
            -moz-transition: box-shadow 0.3s, border-color 0.3s;
            transition: box-shadow 0.3s, border-color 0.3s;
        }

        .Neon-input-dragDrop .Neon-input-icon {
            font-size: 48px;
            margin-top: -10px;
            -webkit-transition: all 0.3s ease;
            -moz-transition: all 0.3s ease;
            transition: all 0.3s ease;
        }

        .Neon-input-text h3 {
            margin: 0;
            font-size: 18px;
        }

        .Neon-input-text span {
            font-size: 12px;
        }

        .Neon-input-choose-btn.blue {
            color: #008bff;
            border: 1px solid #008bff;
        }

        .Neon-input-choose-btn {
            display: inline-block;
            padding: 8px 14px;
            outline: none;
            cursor: pointer;
            text-decoration: none;
            text-align: center;
            white-space: nowrap;
            font-size: 12px;
            font-weight: bold;
            color: #8d9496;
            border-radius: 3px;
            border: 1px solid #c6c6c6;
            vertical-align: middle;
            background-color: #fff;
            box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.05);
            -webkit-transition: all 0.2s;
            -moz-transition: all 0.2s;
            transition: all 0.2s;
        }

        button {
            padding: 10px 20px;
            background-color: #007bff;
            /* Blue color */
            color: #fff;
            /* White text color */
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s, transform 0.2s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            /* Subtle shadow */
        }

        button:hover {
            background-color: #0056b3;
            /* Darker blue on hover */
            transform: translateY(-2px);
            /* Move the button slightly up on hover */
        }

        button:active {
            transform: translateY(0);
            /* Reset the button position when clicked */
        }
    </style>
</head>

<body>
    <!-- <input type="file" id="fileInput" accept="image/*">
    <button onclick="convertImageToText()">Convert</button>
    <div id="output"></div> -->

    <div class="Neon Neon-theme-dragdropbox">
        <input class="input_file" name="files[]" id="filer_input2" multiple="multiple" type="file"
            onchange="convertImageToText()">
        <div class="Neon-input-dragDrop">
            <div class="Neon-input-inner">
                <div class="Neon-input-icon"><i class="fa fa-file-image-o"></i></div>
                <div class="Neon-input-text">
                    <h3>Drag&amp;Drop files here</h3> <span style="display:inline-block; margin: 15px 0">or</span>
                </div><a class="Neon-input-choose-btn blue">Browse Files</a>
            </div>
        </div>
    </div>

    <!-- <div style="display: flex; justify-content: center; margin-top: 100px;">
    <button onclick="convertImageToText()">Convert</button>
    </div> -->

    <div style="display: flex; justify-content: center;border: 1px solid gray; min-height: 100px;max-width: 60%;margin-left: 20%; margin-right: 20%; overflow-y: scroll;padding: 10px 10px;border-radius: 5px;">
        <div id="output"></div>
    </div>

    <!-- <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs"></script>
    <script src="https://cdn.jsdelivr.net/npm/tesseract.js"></script> -->

    <script src="./tensorflow.js"></script>
    <script src="./tesseract.js"></script>

    <script>
        async function convertImageToText() {
            const fileInput = document.getElementById('filer_input2');
            const outputDiv = document.getElementById('output');

            // Check if a file is selected
            if (fileInput.files.length === 0) {
                outputDiv.textContent = "Please select an image file.";
                return;
            }

            // Get the selected file
            const file = fileInput.files[0];

            console.log(file, "file");

            // Use Tesseract.js to recognize text from the image
            const { data: { text } } = await Tesseract.recognize(
                file,
                'eng', // Language (change if your image is in a different language)
                { logger: m => console.log(m) }
            );

            // Display the recognized text
            outputDiv.textContent = text;
        }

    </script>
</body>

</html>
