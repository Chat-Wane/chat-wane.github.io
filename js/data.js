
var ufr = "UFR Sciences et Techniques, Nantes, France";
var iut = "Institute of Technology of Nantes (IUT), Nantes, France";
var fleuriaye = "Institute of Technology of Carquefou (IUT), Carquefou, France"
var dundalk = "Dundalk Institute of Technology, Dundalk, Ireland";
var lina = "Laboratoire d'Informatique de Nantes Atlantique (LINA), UFR Sciences et Techniques, Nantes, France";
var lycee = "Lycée Notre-Dame de Toutes Aides, Nantes, France"

var brice = "Brice Nédelec";
var pascal = "Pascal Molli";
var achour = "Achour Mostéfaoui";
var emmanuel = "Emmanuel Desmontils";
var julian = "Julian Tanke";
var davide = "Davide Frey";


var description = {
    "shortstory": "Ph.D from the GDD team at LINA, Nantes, France. Interested in decentralized ",
    "longstory": ""
};

var cv = {
    "firstname": "Brice",
    "familyname": "Nédelec",
    "title": "Ph.D / Software Engineer",
    "address": "87 Bd Gabriel Lauriol, 44300 Nantes, France",
    "mobile": "+33 6 79 90 43 26",
    "email": "brice.nedelec@gmail.com",
    "driving": true,
    "birthdate": "10/18/1988",
    "social": [{"github": "chat-wane"}],    

    "education": [ {
        "date": "2012-2016",
        "title": "Doctorate -- Computer Science",
        "location": lina
    },{
        "date": "2009-2012",
        "title": "Master degree -- Software Architecture",
        "location": ufr + "; " + dundalk
    },{
        "date": "2006-2009",
        "title": "Bachelor -- Computer Science",
        "location": ufr
    },{
        "date": "2006",
        "title": "Baccalaureate -- Science",
        "location": lycee
    }],
    
    "experience": [ {
        "date": "October 2012 -- November 2016",
        "title": "Distributed and decentralized collaborative editing in Web browsers",
        "location": lina,
        "position": "Ph.D student",
        "mission": [ "Replicated structures",
                     "Decentralized network membership",
                     "Large scale collaborative editing",
                     "Advisors: "+ pascal +"; "+ achour,
                     "Team: Distributed Data Management (GDD)" ]
    },{
        "date": "October 2013 -- June 2014",
        "position": "Teaching assistant",
        "location": iut,
        "mission": [ "Swing, AWT",
                     "Javascript, CSS, HTML" ]
    },{
        "date": "March 2012 -- August 2012",
        "title": "On the space complexity of Logoot's identifiers",
        "location": lina,
        "position": "Research internship",
        "mission": [ "Conflict-free Replicated Data Types (CRDTs) for sequences" ]
    },{
        "date": "April 2009 -- June 2009",
        "title": "Design and development of a metrology software in C++",
        "location": fleuriaye,
        "position": "Internship",
        "mission": [ "Data aggregation",
                     "Export and alert",
                     "Graphical user interface (Qt)"]
    }],

    "publications": [{
        "date": "October 2016",
        "title": "Collaborative editing in Web browsers",
        "authors": [brice],
        "type": "Ph.D manuscript"
    },{
        "date": "April 2016",
        "title": "CRATE: Writing stories together with our browsers",
        "authors": [brice, pascal, achour],
        "type": "Proceedings of the 25th International Conference Companion on World Wide Web, WWW'16 Companion"
    },{
        "date": "September 2015",
        "title": "Spray: an Adaptive Random Peer Sampling Protocol",
        "authors": [brice, julian, davide, pascal, achour],
        "type": "Technical report, LINA-University of Nantes; INRIA Rennes -- Bretagne Atlantique"
    },{
        "date": "September 2013",
        "title": "LSEQ: an Adaptive Structure for Sequences in Distributed Collaborative Editing",
        "authors": [brice, pascal, achour],
        "type": "13th ACM Symposium on Document Engineering"
    },{
        "date": "September 2013",
        "title": "Concurrency effects over variable-size identifiers in distributed collaborative editing",
        "authors": [brice, pascal, achour, emmanuel],
        "type": "DChanges, volume 1008 of CEUR Workshop Proceedings"
    }],

    "skills": [
        {"languages" : ["C", "C++", "Java", "LaTeX", "NodeJS"]},
        {"web": ["Javascript", "CSS", "HTML"]},
        {"design": ["UML"]}
    ],

    "languages": [
        {"french": 4},
        {"english": 3},
        {"spanish": 1}
    ]
}
