function checkExam(array1, array2) {
    var testScore = 0;
      
      for (var i = 0; i < array1.length; i++) {
      
        if (array1[i] == array2[i]) {
        
        testScore += 4;
        
        }
        
        else if (array2[i] === ""){
    
          testScore += 0
      
        }
        
         
        else {
        
        testScore -= 1
        
        }
    
      
      }
      
      if (testScore < 0) {
      
        testScore = 0
        
      }  
     
     return testScore
    
    }
    