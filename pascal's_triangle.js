/*
    find any numer in pascal's triangle
*/
function pasc(row, element){
    if(row == 1 || element == 1 || row == element){
        return 1;
    }else{
        return pasc(row - 1, element - 1) + pasc(row - 1, element);
    }
}
