module.exports = function main() {
    var numbers = new Array(10);
	var i = 0;
	lcd1 = [];
	lcd2 = [];
	lcd3 = [];
	numbers[0] = "._."+
                 "|.|"+
				 "|_|";
	numbers[1] = "..."+
	             "..|"+      
				 "..|";
	numbers[2] = "._."+
	             "._|"+
				 "|_.";
	numbers[3] = "._."+
	             "._|"+
				 "._|";
	numbers[4] = "..."+
	             "|_|"+
				 "..|";
	numbers[5] = "._."+
	             "|_."+
				 "._|";
	numbers[6] = "._."+
	             "|_."+
				 "|_|";
	numbers[7] = "._."+
	             "..|"+
				 "..|";
	numbers[8] = "._."+
	             "|_|"+
				 "|_|";
	numbers[9] = "._."+
	             "|_|"+
				 "..|";
	
	// 第一行
	for (i;i<arguments[0].length;i++){
	    lcd1.push(numbers[arguments[0][i]].substring(0,3)); 
		lcd2.push(numbers[arguments[0][i]].substring(3,6));
		lcd3.push(numbers[arguments[0][i]].substring(6,9));
	}
	
	lcd1 = lcd1.join(' ');
	lcd2 = lcd2.join(' ');
	lcd3 = lcd3.join(' ');
	
	return lcd1 + '\n' +lcd2 + '\n' + lcd3 + '\n';
};