function calBMI()
{   
    let w = document.getElementById("weight").value
    let h = document.getElementById("height").value
    let result = w/((h/100)*(h/100))
    let BMI = (result.toFixed(1))
   
    if(BMI < 18.5){
        return document.getElementById('resultBMI').innerText = "Your BMI :" + BMI + "\n" + "Your BMI < 18.5 : Underweight"
    }else if(BMI < 22.9){
        return document.getElementById('resultBMI').innerText = "Your BMI :" + BMI + "\n" + "Your BMI between 18.5 - 22.9 : Normal"
    }else if(BMI < 24.9){
        return document.getElementById('resultBMI').innerText = "Your BMI :" + BMI + "\n" + "Your BMI between 23.0 - 24.9 : Overweight"
    }else if(BMI < 29.9){
        return document.getElementById('resultBMI').innerText = "Your BMI :" + BMI + "\n" + "Your BMI between 25.0 - 29.9 : Obese"
    }else{
        return document.getElementById('resultBMI').innerText = "Your BMI :" + BMI + "\n" + "Your BMI more than 30 : Dangerous Obesity"
    }
}



