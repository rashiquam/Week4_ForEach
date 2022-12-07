const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
    
    ];
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    const person = {    
    name: "Costas",
    address: {
     street: "Lalaland 12"
     }
    };
    // for(var a=0; a<companies.length; a++)
    // {
    //     document.write(companies[a].name + " "+ companies[a].category + " " + companies[a].start + " " + companies[a].end + "<br>");
    // }
    document.write("Printing name of each company using forEach <br>");
    companies.forEach(n =>{
        document.write(n.name + "<br>");
        // document.write(n.name + " "+ n.category + " " + n.start + " " + n.end + "<br>");
    });
    document.write("Printing name of each company that started after 1987 <br>");
    companies.forEach(n =>{
        if(n.start > 1987){
            document.write(n.name + "<br>");
        }
    });
    document.write("Destructuring property street from object person <br>");
    let{name,address}=person;
    let{street}=address;
    document.write(street+"<br>");
