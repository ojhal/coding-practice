var mostWordsFound = function(sentences) {
    let n = '';
let count=0;
for(let i = 0 ; i<sentences.length ; i++){
n = sentences[i].split(' ');
if(n.length>count){
count = n.length;

}
}
return count;
};
