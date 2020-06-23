function getpwd(len){
  chr=[]
    for (i=32;i<127;i++){
        chr.push(String.fromCharCode(i))
    };var o="",k;for(i=0;i<len;i++){
        k=Math.floor(Math.random()*chr.length+1);console.log(k)
        o+=chr[k]
    }
    return {pwd:o,chrs:chr};
}
