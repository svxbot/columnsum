/**
 * ���������� ��� �������� ����� �������� ������� �������
 * 
 * @version 0.1
 * @data 20.04.2014
 * @author ilvoropaev@gmail.com
 * 
 */
var td = document.getElementsByTagName('td');
var th = document.getElementsByTagName('th');
var tdl = td.length;

var cols = prompt('������� ������ �������� ��� �������� ����� �������: ');
var cols = cols.split(',');

for(i=0;i<cols.length;i++){
	colsum(cols[i],td, tdl, th[ cols[i] ].childNodes[0].innerHTML);
}

function colsum(n,td,tdl,h){
	//������ ��� �������
	var sum = 0;
	var err = 0;
	for(var i=0; i< tdl; i++){
		if(td[i].cellIndex == n){
			if(td[i].innerHTML != '')
				sum += parseFloat(td[i].innerHTML);
			else
				err++;
		}
	}

	alert(h+': '+sum+' (invalid or empty value in '+err+' cell)');

}