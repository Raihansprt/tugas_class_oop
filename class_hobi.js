class person {
        constructor(name, umur, sekolah ){ 
        this.name = name ;
        this.umur = umur;
        this.sekolah = sekolah; 
}
   run() {
   return "nama saya " + this.name + "berumur " + this.umur + "bersekolah di " + this.sekolah ;
   }

   run2(){
       return this; 
   }

}

class customer extends person{
    constructor(nama, umur,hobi){
        super(nama, umur);

        this.hobi = hobi ;
    }
 job(){
     return "dan hobi saya adalah " + this.hobi;
 }   
}
const raihan  = new person ("raihan ", "17 tahun ", "smk yadika soreang ");
const run=new customer(" raihan ", "17 tahun ", "smk yadika soreang ","sepakbola ");
console.log(raihan.run());
console.log(run.job()); 