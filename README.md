# GemStone_Classification_App

## Table of Contents
1. Introduction
2. Project Overview
3. Dataset
4. Dependencies
5. Installation
6. Running the App


## 1. Introduction
This documentation provides an overview of the Gemstone Classification project, detailing the purpose, dataset used, dependencies, and instructions for installation and running the application.

## 2. Project Overview
The Gemstone Classification project is a machine learning-based application designed to identify and classify gemstones based on their visual characteristics. This project utilizes image data of various gemstones to train a machine learning model, which can then predict the type or class of a given gemstone image.

The primary goal of this project is to provide a user-friendly interface for gemstone classification.

## 3. Dataset
The dataset used for training and testing the Gemstone Classification model consists of high-quality images of different gemstone types. This dataset contains 3,200+ images of different gemstones. The images are grouped into 87 classes which are already divided into train and test data.

[For More Info](https://www.kaggle.com/datasets/lsind18/gemstones-images)

☝️ To access and download the gemstone dataset mentioned, please click on the above link.

## 4. Dependencies
Before running the Gemstone Classification application, ensure that you have the following dependencies installed:

```
TensorFlow (version 2.x)
Tensorflow_Hub (version 2.x)
OpenCV (version 4.x)
Flask (version 2.x)
Numpy (version 1.x)
PIL (Python Imaging Library)
```

You can install these dependencies using pip, Python's package manager.

## 5. Installation
Follow these steps to install the required dependencies:

1. If you do not have Python installed, download and install it from the official Python website (https://www.python.org/downloads/).
2. Open the terminal and run `npm i` in the frontend folder to install all React JS dependencies.
3. Create a Virtual Environment inside the backend folder.
4. Activate the virtual environment and run the command `pip install -r requirements.txt`, this will install all the required dependencies for Flask.

## 6. Running the App
To run the Gemstone Classification application, follow these steps:

1. Clone or download the project repository from GitHub.
2. Navigate to the project directory using the command line.
3. Start the React JS and Flask application.
4. Once the application is running, open a web browser and go to http://localhost:5000 to access the Gemstone Classification web interface.
5. Upload an image of a gemstone, and click on the Predict button. The model will classify it into one of the predefined gemstone classes.
