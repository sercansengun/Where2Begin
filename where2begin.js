var where2begin = "";

var array_breaker = ["", "</br>", "</br></br>"];
var array_opener = ["Chapter I", "Introduction", "I", "Prelude", "-I-", "~ I ~", "- Chapter 1 -", "~ Chapter 1 ~", "", "§", "*", "0 Chapter I 0", "0 Introduction 0", "Epigraph", "Intro"];
var array_object_pronoun = ["me", "her", "him", "us", "it", "them"];
var array_object_pronoun_single = ["me", "her", "him"];
var array_name = ["Ishmael", "Herman", "Jane", "Thomas", "Gabriel", "Aureliano Buendía", "Lolita", "Vladimir", "Leo", "Anna", "James", "Eve", "Adam", "George", "Charles", "Ralph", "Nathanael", "Mark", "Tom", "Franz", "Josef", "Italo", "Calvino", "Samuel", "Murphy", "David", "Ford", "Edward", "Paul", "Thomas", "William", "Toni", "Miguel", "Albert", "Shuyu", "Lin Kong", "Michael", "Fyodor", "Gertrude", "Jacob", "John", "Richard", "Virginia", "Marcel", "Anita", "Weiss", "Zora", "Eustace", "Ernest", "Iain", "Jeffrey", "Sinclair", "Elmer", "Louise", "Wittgenstein", "Brooke", "Joseph", "Gilbert", "Somerset", "Scott", "Salman", "Gibreel", "Sylvia", "Rosenberg", "Mindy", "Lenore" , "Saul", "Dick", "Stanley", "Hiram", "Emma", "Clara", "Ely", "Kate", "Henry", "Rose", "Jim", "Vaughan", "Dodie", "Abraham", "Lucas", "Sinclair", "Raphael", "Carson", "Antoine", "André", "Alain", "Louis-Ferdinand", "Colin", "Boris", "Simone", "Aleksandr", "Jacques", "Guillaume", "Gregor", "Sara", "Iago", "Joan", "Donna", "Marguerite", "Flannery", "Harriet", "Graham", "Hale", "Jeanette", "Rebecca", "Daphne", "Audrey", "Clare", "Emily", "Lewis", "Alice", "Kurt", "Scarlett", "Margaret"];
var array_people_adjectives = ["single", "good", "distant", "happy", "unhappy", "bright", "cold", "plump", "sick", "spiteful", "old", "drunk", "young", "wrong", "younger", "vulnerable", "queer", "pretty", "ugly", "pale", "powerful", "alcoholic", "fine", "starving", "lost", "frozen", "alone", "penniless", "invisible", "evil", "lonesome", "skinny", "beautiful"];
var array_other_adjectives = ["good", "distant", "bright", "cold", "new", "lousy", "dark", "stormy", "violent", "fierce", "honorary", "spiteful", "angry", "long", "poor", "bad", "long", "sultry", "ramshackle", "austere", "sturdy", "delicate", "mad", "curling", "smogless", "magnificent", "true", "flat", "clandestine", "elderly", "uneasy"];
var array_people = ["man", "woman", "husband", "wife", "father", "mother", "lover", "brother", "sister", "hero", "gentleman", "girl", "boy", "grandmother", "grandfather", "aunt", "sheriff", "traveler", "prince", "princess"];
var array_concepts = ["fortune", "fire", "ice", "light", "life", "wisdom", "foolishness", "belief", "incredulity", "darkness", "hope", "despair", "love", "misgiving", "laughter", "alternative", "love", "world", "nightmare", "fiction", "sex"];
var array_abstract_things = ["screaming", "firing squad", "rain", "literature", "snow", "beauty", "advice", "justice", "law", "heart", "story", "adventure", "wish", "jungle", "End of the World", "war"];
var array_longtime = ["day", "week", "year", "aeon", "age", "hour", "epoch", "season", "spring", "winter", "summer"];
var array_sometime = ["afternoon", "morning", "night", "evening", "day", "noon"];
var array_pronoun = ["I", "you", "he", "she", "we", "they"];
var array_pronoun_single = ["I", "you", "he", "she"];
var array_pronoun_past = ["I was", "you were", "he was", "she was", "we were", "they were"];
var array_pronoun_perfect = ["I have", "you have", "he has", "she has", "we have", "they have"];
var array_titles = ["Colonel", "Fisher", "Commodius", "Miss", "Soldier", "Mr.", "Mrs.", "Dr.", "Spirit"];
var array_possessives = ["my", "your", "his", "her", "our", "their"];
var array_places = ["Riverrun", "Howth Castle", "Environs", "Two Cities", "New York", "London", "Lot 49", "City of Glass", "la Mancha", "Goose Village", "heavens", "Randolph Junction", "Nazarene", "West Condon", "High Mass", "Sonoma", "California", "Zenith", "North Pole", "Archipelago", "Place de la Concorde", "Zagreb", "Bombay", "Florida", "Brighton", "Manderley", "Privet Drive"];
var array_shorttime = ["1984", "January", "February", "March", "April", "May", "August", "September", "October", "November", "December", "1960", "1974", "Sunday", "1969", "1801"];
var array_clock = ["two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four"];
var array_things = ["cardboard", "station", "page", "lather", "mirror", "razor", "bowl", "lamp", "fence", "flower", "lance", "shield", "shelf", "television", "channel", "money", "fish", "message", "dress", "novel", "glass", "mantel", "car", "sink", "mosquito-netting", "cigarette", "axe"];
var array_animals = ["nag", "greyhound", "fish", "camel", "bull", "bulldog", "dog", "vermin"];
var array_special56 = ["I was out of my", "you were out of your", "he was out of his", "she was out of her", "we were out of our", "they were out of their"];
var array_academia = ["English Literature", "Anthropology", "Communication Studies", "Economics", "Education", "Geography", "History", "Law", "Linguistics", "Political Science", "Psychology", "Sociology", "Archeology", "Behavioural Science", "Public Administration"];
var array_verbs_past = ["begun", "turned", "left", "started", "continued", "rustled", "sang", "thought", "finished", "heard"];
var array_verbs = ["divorce", "drag", "buy", "raise"];
var array_special65 = ["kitchen", "bathroom", "bedroom", "attic", "basement", "estate", "forest", "emergency room"];
var array_pronoun_present = ["I am", "you are", "he is", "she is", "we are", "they are"];

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function function_object_pronoun () {return array_object_pronoun[Math.random() * array_object_pronoun.length>>0];}
function function_object_pronoun_single () {return array_object_pronoun_single[Math.random() * array_object_pronoun_single.length>>0];}
function function_name () {return array_name[Math.random() * array_name.length>>0];}
function function_people_adjectives () {return array_people_adjectives[Math.random() * array_people_adjectives.length>>0];}
function function_other_adjectives () {return array_other_adjectives[Math.random() * array_other_adjectives.length>>0];}
function function_people () {return array_people[Math.random() * array_people.length>>0];}
function function_concepts () {return array_concepts[Math.random() * array_concepts.length>>0];}
function function_abstract_things () {return array_abstract_things[Math.random() * array_abstract_things.length>>0];}
function function_longtime () {return array_longtime[Math.random() * array_longtime.length>>0];}
function function_pronoun () {return array_pronoun[Math.random() * array_pronoun.length>>0];}
function function_pronoun_single () {return array_pronoun_single[Math.random() * array_pronoun_single.length>>0];}
function function_titles () {return array_titles[Math.random() * array_titles.length>>0];}
function function_sometime () {return array_sometime[Math.random() * array_sometime.length>>0];}
function function_possessives () {return array_possessives[Math.random() * array_possessives.length>>0];}
function function_places () {return array_places[Math.random() * array_places.length>>0];}
function function_shorttime () {return array_shorttime[Math.random() * array_shorttime.length>>0];}
function function_clock () {return array_clock[Math.random() * array_clock.length>>0];}
function function_things () {return array_things[Math.random() * array_things.length>>0];}
function function_animals () {return array_animals[Math.random() * array_animals.length>>0];}
function function_pronoun_past () {return array_pronoun_past[Math.random() * array_pronoun_past.length>>0];}
function function_pronoun_perfect () {return array_pronoun_perfect[Math.random() * array_pronoun_perfect.length>>0];}
function function_special56 () {return array_special56[Math.random() * array_special56.length>>0];}
function function_academia () {return array_academia[Math.random() * array_academia.length>>0];}
function function_verbs_past () {return array_verbs_past[Math.random() * array_verbs_past.length>>0];}
function function_verbs () {return array_verbs[Math.random() * array_verbs.length>>0];}
function function_special65 () {return array_special65[Math.random() * array_special65.length>>0];}
function function_pronoun_present () {return array_pronoun_present[Math.random() * array_pronoun_present.length>>0];}

function breaker () {
  where2begin = where2begin + array_breaker[Math.random() * array_breaker.length>>0];
}

function opener () {
  where2begin = where2begin + "<h1>" + array_opener[Math.random() * array_opener.length>>0] + "</h1>";
}

function crumb1 () {
    where2begin = where2begin + "Call " + function_object_pronoun_single() + " " + function_name() + ". ";
}

function crumb2 () {
    where2begin = where2begin + "It is a truth universally acknowledged, that one " + function_people_adjectives() + " " + function_people() + " in possession of " + function_other_adjectives() + " " + function_concepts() + ", must be in want of another " + function_people_adjectives() + " " + function_people() + ". ";
}

function crumb3 () {
  where2begin = where2begin + capitalizeFirstLetter(function_abstract_things()) + " comes across the sky. ";
}

function crumb4 () {
    where2begin = where2begin + "Many " + function_longtime() + "s later, as " + function_pronoun() + " faced the " + function_abstract_things() + ", " + function_titles() + " " + function_name() + " was to remember that " + function_other_adjectives() + " " + function_sometime() + " when " + function_possessives() + " " + function_people() + " took everyone to discover the " + function_concepts() + ". ";
}

function crumb5 () {
    where2begin = where2begin + function_name() + ", " + function_concepts() + " of " + function_possessives() + " " + function_concepts() + ", " + function_concepts() + " of my loins. ";
}

function crumb6 () {
    where2begin = where2begin + capitalizeFirstLetter(function_other_adjectives()) + " families are all alike; every " + function_other_adjectives() + " " + function_people() + " is " + function_other_adjectives() + " in " + function_possessives() + " own way. ";
}

function crumb7 () {
    where2begin = where2begin + function_places() + ", past " + function_name() + " and " + function_name() + "\'s, from swerve to shore to bend of bay, brings us by a commodius vicus of recirculation back to " + function_places() + " and " + function_places() + ". ";
}

function crumb8 () {
    where2begin = where2begin + "It was one " + function_other_adjectives() + " " + function_sometime() + " in " + function_shorttime() + ", and the clocks were striking " + function_clock() + ". ";
}

function crumb9 () {
    where2begin = where2begin + "It was the best of times, it was the worst of times, it was the " + function_longtime() + " of " + function_concepts() + ". ";
}

function crumb10 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_single()) + ", the " + function_people_adjectives() + " " + function_people() + ". ";
}

function crumb11 () {
    where2begin = where2begin + function_titles() + " " + function_name() + " of the " + function_places() + " Post sat at " + function_possessives() + " desk and stared at a piece of " + function_other_adjectives() + " " + function_things() + ". ";
}

function crumb12 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " don\'t know about " + function_object_pronoun() + " without " + function_pronoun_perfect() + " read a book by the name of The " + capitalizeFirstLetter(function_abstract_things()) + " of " + function_name() + " " + function_name() + "; but that ain't no matter. ";
}

function crumb13 () {
    where2begin = where2begin + "Someone must have slandered " + function_name() + ", for one " + function_sometime() + ", without having done anything truly wrong, " + function_pronoun_past() + " arrested. ";
}

function crumb14 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_present()) + " about to begin reading " + function_name() + " " + function_name() + "\'s new novel. ";
    //", If on a " + function_longtime() + "\'s " + function_sometime() + " one " + function_people() + ". ";
}

function crumb15 () {
    where2begin = where2begin + "The sun shone, having no " + function_concepts() + ", on the nothing " + function_other_adjectives() + ". ";
}

function crumb16 () {
    where2begin = where2begin + "If you really want to hear about it, the first thing you'll probably want to know is where " + function_pronoun_past() + " born, and what " + function_possessives() + " " + function_other_adjectives() + " childhood was like, and how " + function_possessives() + " parents were occupied and all before they had " + function_object_pronoun() + ", and all that " + function_name() + " " + function_name() + " kind of crap, but I don't feel like going into it, if you want to know the truth. ";
}

function crumb17 () {
    where2begin = where2begin + "Once upon a time and a very " + function_other_adjectives() + " time it was there was a " + function_people() + " coming down along the road and " + function_pronoun() + " met the " + function_people_adjectives() + " little " + function_people() + " named baby " + function_name() + ". ";
}

function crumb18 () {
    where2begin = where2begin + "This is the saddest " + function_abstract_things() + " " + function_pronoun_perfect() + " ever " + function_verbs_past() + ". ";
}

function crumb19 () {
    where2begin = where2begin + "Whether " + function_pronoun_single() + " shall turn out to be the " + function_people() + " of " + function_possessives() + " own " + function_concepts() + ", or whether that " + function_things() + " will be held by anybody else, this " + function_abstract_things() + " must show. ";
}

function crumb20 () {
    where2begin = where2begin + "Stately, " + function_people_adjectives() + " " + function_name() + " " + function_name() + " came from the " + function_places() + ", bearing a " + function_things() + " on which a " + function_things() + " and a " + function_things() + " lay crossed. ";
}

function crumb21 () {
    where2begin = where2begin + "It was one " + function_other_adjectives() + " and " + function_other_adjectives() + "  " + function_sometime() + "; the " + function_abstract_things() + " fell in torrents, except at occasional intervals, when it was checked by a " + function_other_adjectives() + " gust of wind which swept up the streets (for it is in " + function_places() + " that our scene lies), rattling along the house-tops, and " + function_other_adjectives() + " agitating the scanty flame of the " + function_things() + " that struggled against the " + function_concepts() + ". ";
}

function crumb22 () {
    where2begin = where2begin + "One " + function_other_adjectives() + " " + function_sometime() + " " + function_titles() + " " + function_name() + " " + function_name() + " came home from the " + function_places() + " party whose hostess had put perhaps too much kirsch in the fondue to find that " + function_pronoun() + ", " + function_name() + ", had been named executor, or she supposed executrix, of the " + function_special65() + " of one " + function_name() + " " + function_name() + ", one " + function_places() + " real estate mogul who had once lost " + function_clock() + " million dollars in " + function_possessives() + " spare time but still had assets numerous and tangled enough to make the job of sorting it all out more than " + function_other_adjectives() + ". ";
}

function crumb23 () {
    where2begin = where2begin + "It was a wrong number that started it, the telephone ringing " + function_clock() + " times in the dead of " + function_sometime() + ", and the voice on the other end asking for the " + function_people() + " " + function_pronoun_past() + " not. ";
}

function crumb24 () {
    where2begin = where2begin + "Through the " + function_things() + ", between the " + function_other_adjectives() + " " + function_things() + " spaces, " + function_pronoun() + " could see " + function_object_pronoun() + ". ";
}

function crumb25 () {
    where2begin = where2begin + capitalizeFirstLetter(function_places()) + " was " + function_other_adjectives() + ". ";
}

function crumb26 () {
    where2begin = where2begin + "Somewhere in " + function_places() + ", in a place whose name I do not care to remember, one " + function_people() + " lived not long ago, one of those who has a " + function_things() + " and ancient " + function_things() + " on a " + function_things() + " and keeps a skinny " + function_animals() + " and a " + function_animals() + " for racing. ";
}

function crumb27 () {
    where2begin = where2begin + function_name() + " died today.";
}

function crumb28 () {
    where2begin = where2begin + "Every " + function_longtime() + " " + function_name() + " returned to " + function_places() + " to " + function_verbs() + " " + function_possessives() + " " + function_people() + ", " + function_name() +". ";
}

function crumb29 () {
    where2begin = where2begin + "The sky above " + function_places() + " was the color of " + function_concepts() + ", tuned to a dead " + function_things() + ". ";
}

function crumb30 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_present()) + " one " + function_people_adjectives() + " " + function_people() + " ... " + function_pronoun_present() + " one " + function_people_adjectives() + " " + function_people() + ". ";
}

function crumb31 () {
    where2begin = where2begin + "Once the " + function_people_adjectives() + " " + function_people() + " dragged " + function_possessives() + " " + function_people() + " along the ground through " + function_possessives() + " orchard. \'Stop!\' cried the groaning " + function_people_adjectives() + " " + function_people() + " at last, \'Stop! I did not " + function_verbs() + " my " + function_people() + " beyond this tree\'. ";
}

function crumb32 () {
    where2begin = where2begin + "In a sense, " + function_pronoun_present() + " " + function_name() + " " + function_name() + ". ";
}

function crumb33 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_past()) + " like so, but not really.";
}

function crumb34 () {
    where2begin = where2begin + "—" + capitalizeFirstLetter(function_abstract_things())  + " ... in a voice that " + function_verbs_past() + ".";
}

function crumb35 () {
    where2begin = where2begin + function_titles() + " " + function_name() + " said " + function_pronoun() +  " would " + function_verbs() + " the " + function_things() + ". ";
}

function crumb36 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " shot the " + function_people_adjectives() + " " + function_people() + " first.";
}

function crumb37 () {
    where2begin = where2begin + "For one " + function_other_adjectives() + " " + function_longtime() + ", " + function_pronoun() + " went to bed early. ";
}

function crumb38 () {
    where2begin = where2begin + function_titles() + " " + function_name() + ", at forty, knew that " + function_possessives() + " life had been ruined by " + function_abstract_things() + ". ";
}

function crumb39 () {
    where2begin = where2begin + "Ships at a distance have every " + function_people() + "\'s " + function_abstract_things() + " on board. ";
}

function crumb40 () {
    where2begin = where2begin + "There was a " + function_people() + " called " + function_name() + " " + function_name() + " " + function_name() + ", whom " + function_pronoun() + " almost deserved " + ". ";
}

function crumb41 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_past()) + " one " + function_people_adjectives() + " " + function_people() + " who " + function_verbs_past() + " alone in a skiff in " + function_places() + " and " + function_pronoun() + " had gone " + function_clock() + " " + function_longtime() + "s now without taking the " + function_things() +". ";
}

function crumb42 () {
    where2begin = where2begin + "It was the " + function_shorttime() + " " + function_possessives() + " " + function_people() + " " + function_verbs_past() + ". ";
}

function crumb43 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_past()) + " born twice: first, as the " + function_people() + ", on a remarkably " + function_other_adjectives() + " " + function_places() + " " + function_longtime() + " in " + function_shorttime() + "; and then again, as the " + function_people() + ", in one " + function_special65() + " near " + function_places() + ", " + function_places() + ", in " + function_shorttime() + ". ";
}

function crumb44 () {
    where2begin = where2begin + function_name() + " " + function_name() + " was " + function_people_adjectives() + ". ";
}

function crumb45 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " started dying before the " + function_abstract_things() + ", and like the " + function_abstract_things() + ", " + function_pronoun() + " continued to fall. ";
}

function crumb46 () {
    where2begin = where2begin + "In the beginning, sometimes " + function_pronoun() + " left a single " + function_things() + " in the street. ";
}

function crumb47 () {
    where2begin = where2begin + function_titles() + " " + function_name() + " had that kind of " + function_abstract_things() + " which seems to be thrown into relief by some " + function_other_adjectives() + " " + function_things() + ". ";
}

function crumb48 () {
    where2begin = where2begin + "It was " + function_concepts() + " at first sight. ";
}

function crumb49 () {
    where2begin = where2begin + "What if this " + function_people_adjectives() + " " + function_people() + ", who writes such " + function_other_adjectives() + " poems, in competition with " + function_possessives() + " " + function_people() + ", whose poems are equally " + function_other_adjectives() + ", should stretch " + function_possessives() + " remarkably " + function_other_adjectives() + " and " + function_other_adjectives() + " legs out before " + function_object_pronoun() + ", so that " + function_possessives() + " skirt slips up to the tops of " + function_possessives() + " stockings? ";
}

function crumb50 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_perfect()) + " never " + function_verbs_past() + " a " + function_things() + " with more " + function_concepts() + ". ";
}

function crumb51 () {
    where2begin = where2begin + "Once upon the " + function_longtime() + ", there was one " + function_people() + " who discovered that " + function_pronoun() +  " had turned into this " + function_people_adjectives() + " person. ";
}

function crumb52 () {
    where2begin = where2begin + "In " + function_possessives() + " " + function_people_adjectives() + " and more " + function_people_adjectives() + " " + function_longtime() + " " + function_possessives() + " " + function_people() + " gave me some " + function_abstract_things() + " that I been turning over in my mind ever since. ";
}

function crumb53 () {
    where2begin = where2begin + "\"To be born again\", " + function_verbs_past() + " " + function_name() + " " + function_name() + " tumbling from " + function_places() + ", \"first " + function_pronoun() + " must die.\" ";
}

function crumb54 () {
    where2begin = where2begin + "It was one " + function_people_adjectives() + ", " + function_other_adjectives() + " " + function_longtime() + ", the " + function_longtime() + " " + function_pronoun() + " electrocuted the " + function_name() + "\'s, and " + function_pronoun() + " didn\'t know what " + function_pronoun_past() + " doing in " + function_places() + ". ";
}

function crumb55 () {
    where2begin = where2begin + "Most really " + function_people_adjectives() + " " + function_people() + " have pretty " + function_people_adjectives() + " feet, and so does " + function_name() + " " + function_name() + ", " + function_name() + " notices, all of a sudden. ";
}

function crumb56 () {
    where2begin = where2begin + "If " + function_special56() + " mind, it's all right with " + function_object_pronoun() + ", " + function_verbs_past() + " " + function_name() + " " + function_name()+ ". ";
}

function crumb57 () {
    where2begin = where2begin + "When " + function_name() + " " + function_name() + " was a little " + function_people() + " he was called " + function_name() + " " + function_name() + ". ";
}

function crumb58 () {
    where2begin = where2begin + function_name() + " " + function_name() + ", together with " + function_possessives() + " " + function_people() + " " + function_name() + " and " + function_clock() + " friends of the faith from " + function_places() + ", were summoned by " + function_titles() + " and " + function_titles() + " " + function_name() + " " + function_name() + ", widow of the beloved " + function_places() + " preacher " + function_name() + " " + function_name() + ", to " + function_places() + " on the weekend of the " + function_clock() + " and " + function_clock() + " of " + function_shorttime() + ", there to await the " + function_abstract_things() + ". ";
}

function crumb59 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " waited, " + function_name() + " " + function_name() + ", for " + function_possessives() + " " + function_people() + " to come in, but " + function_pronoun() + " kept " + function_object_pronoun() + " unconscionably, and there were moments at which " + function_pronoun() + " showed, in the " + function_things() + " over the " + function_things() + ", a face positively " + function_people_adjectives() + " with the irritation that had brought " + function_object_pronoun() + " to the point of going away without sight of " + function_object_pronoun() + ". ";
}

function crumb60 () {
    where2begin = where2begin + "In the late " + function_longtime() + " of that " + function_longtime() + " " + function_pronoun() + " lived in a house in " + function_places() + " that looked across the river and the plain to the mountains. ";
}

function crumb61 () {
    where2begin = where2begin + "Take " + function_possessives() + " " + function_animals() + ", dear, said my " + function_people() + " " + function_name() + ", as " + function_pronoun() + " climbed down from this animal on " + function_possessives() + " return from " + function_places() + ". ";
}

function crumb62 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_past()) + " an inch, perhaps two, under six feet, " + function_people_adjectives() + " built, and " + function_pronoun() + " advanced straight at " + function_object_pronoun() + " with a slight stoop of the shoulders, head forward, and a fixed from-under stare which made " + function_object_pronoun() + " think of a charging " + function_animals() + ". ";
}

function crumb63 () {
    where2begin = where2begin + capitalizeFirstLetter(function_abstract_things()) + "? —" + capitalizeFirstLetter(function_pronoun()) + " get that in the next world, in this world " + function_pronoun_perfect() + " the " + function_abstract_things() + ". ";
}

function crumb64 () {
    where2begin = where2begin + function_name() + " died this " + function_longtime() + " in " + function_possessives() + " last " + function_things() + "-crash. ";
}

function crumb65 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " wrote this sitting in the " + function_special65() + " " + function_things() + ". ";
}

function crumb66 () {
    where2begin = where2begin + "When " + function_pronoun() + " finally caught up with " + function_name() + " " + function_name() + ", " + function_pronoun_past() + " drinking beer with one " + function_people_adjectives() + " " + function_animals() + " named " + function_name() + " " + function_name() + " in a " + function_other_adjectives() + " joint just outside of " + function_places() + ", " + function_places() + ", drinking the " + function_abstract_things() + " right out of the " + function_other_adjectives() + " " + function_sometime() + ". ";
}

function crumb67 () {
    where2begin = where2begin + "The towers of " + function_places() + " aspired above the " + function_sometime() + " mist; " + function_other_adjectives() + " towers of steel and cement and limestone, " + function_other_adjectives() + " as cliffs and " + function_other_adjectives() + " as silver rods. ";
}

function crumb68 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_past()) + " born with a gift of " + function_concepts() + " and a sense that the world was " + function_other_adjectives() + ". ";
}

function crumb69 () {
    where2begin = where2begin + "In " + function_places() + ", there were " + function_clock() + " mutes and they were always together. ";
}

function crumb70 () {
    where2begin = where2begin + "High, high above the " + function_places() + ", on the first " + function_longtime() + " of " + function_shorttime() + ", " + function_clock() + " professors of " + function_academia() + " approached each other at a combined velocity of 1200 miles per hour. ";
}

function crumb71 () {
    where2begin = where2begin + "Once when " + function_pronoun_past() + " " + function_clock() + " " + function_pronoun() + " saw one " + function_other_adjectives() + " picture in a book about the " + function_concepts() + ", called " + capitalizeFirstLetter(function_other_adjectives()) + " Stories. ";
}

function crumb72 () {
    where2begin = where2begin + "Should " + function_pronoun() + " try to " + function_verbs() + " the " + function_things() + "? ";
}

function crumb73 () {
    where2begin = where2begin + "Here's how " + function_pronoun() + " " + function_verbs_past() + ". ";
}

function crumb74 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " lay " + function_other_adjectives() + " on the brown, pine-needled floor of the " + function_special65() + ", " + function_possessives() + " chin on " + function_possessives() + " folded arms, and high overhead the wind blew in the tops of the pine trees. ";
}

function crumb75 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " came to " + function_possessives() + " " + function_special65() + " one " + function_shorttime() + ". ";
}

function crumb76 () {
    where2begin = where2begin + function_name() + " " + function_verbs_past() + " " + function_possessives() + " " + function_things() + ". ";
}

function crumb77 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " hesitated one " + function_other_adjectives() + " " + function_longtime() + " before writing a book on " + function_concepts() + ". ";
}

function crumb78 () {
    where2begin = where2begin + "How does one " + function_people() + " get to this " + function_other_adjectives()  + " " + function_places() + "? ";
}

function crumb79 () {
    where2begin = where2begin + capitalizeFirstLetter(function_people_adjectives()) + ", " + function_people_adjectives() + ", " + function_people_adjectives() + ", " + function_people_adjectives() + ", and " + function_people_adjectives() + " the sixteen year old " + function_people() + " stands perfectly still at " + function_places() + " on " + function_sometime() + " " + function_shorttime() + " " + capitalizeFirstLetter(function_clock()) + ". ";
}

function crumb80 () {
    where2begin = where2begin + "At last " + function_pronoun_present() + " tired of " + function_other_adjectives() + " " + function_concepts() + ". ";
}

function crumb81 () {
    where2begin = where2begin + "As " + function_name() + " " + function_name() + " awoke one " + function_sometime() + " from " + function_other_adjectives() + " dreams he found himself transformed in his bed into a monstrous " + function_animals() + ". ";
}

function crumb82 () {
    where2begin = where2begin + "The " + function_abstract_things() + " in " + function_places() + " began over a pack of " + function_things() + ". ";
}

function crumb83 () {
    where2begin = where2begin + "What makes " + function_name() + " " + function_people_adjectives() + "? some people ask. I never ask. ";
}

function crumb84 () {
    where2begin = where2begin + "Everyone had always said that " + function_name() + " would be a preacher when " + function_pronoun_single() + " grew up, just like " + function_possessives() + " " + function_people() + ". ";
}

function crumb85 () {
    where2begin = where2begin + "The " + function_abstract_things() + " in the mountains was melting and " + function_name() + " had been dead for several " + function_longtime() + "s before " + function_pronoun() + " understood the gravity of " + function_possessives() + " situation. ";
}

function crumb86 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun_past()) + " born in the city of " + function_places() + "... once upon a time. ";
}

function crumb87 () {
    where2begin = where2begin + "One " + function_longtime() + ", " + function_pronoun_past() + " already old, in the entrance of the " + function_other_adjectives() + " place one " + function_people() + " came up to " + function_object_pronoun() + ". ";
}

function crumb88 () {
    where2begin = where2begin + capitalizeFirstLetter(function_pronoun()) + " spoke in " + function_possessives() + " voice, American, and there’s a " + function_concepts() + " in " + function_possessives() + " eyes that’s halfway hopeful. ";
}

function crumb89 () {
    where2begin = where2begin + "The " + function_people() + " didn’t want to go to " + function_places() + ". ";
}

function crumb90 () {
    where2begin = where2begin + "\'" + capitalizeFirstLetter(function_pronoun_present()) + " full of " + function_concepts() + ",\' " + function_name() + " tells " + function_object_pronoun() + ". ";
}

function crumb91 () {
    where2begin = where2begin + function_name() + " knew, before " + function_pronoun() + " had been in " + function_places() + " three hours, that " + function_pronoun() + " meant to murder " + function_object_pronoun() + ". ";
}

function crumb92 () {
    where2begin = where2begin + "Like most people " + function_pronoun() + " lived for some " + function_other_adjectives() + " time with " + function_possessives() + " " + function_people() + " and " + function_people() + ". ";
}

function crumb93 () {
    where2begin = where2begin + "Last " + function_longtime() + " " + function_pronoun() + " dreamt " + function_pronoun() + " went to " + function_places() + " again. ";
}

function crumb94 () {
    where2begin = where2begin + "Mr and Mrs " + function_name() + ", of number " + function_clock() + " " + function_places() + ", were proud to say that they were perfectly " + function_people_adjectives() + ", thank you very much. ";
}

function crumb95 () {
    where2begin = where2begin + function_name() + ": It’s hard being left behind. I wait for " + function_name() + ", not knowing where " + function_pronoun_present() + ", wondering if " + function_pronoun_present() + " okay. ";
}

function crumb96 () {
    where2begin = where2begin + "But, " + function_pronoun() + " may say, " + function_pronoun() + " asked " + function_object_pronoun() + " to speak about " + function_abstract_things() + " and " + function_concepts() + ". ";
}

function crumb97 () {
    where2begin = where2begin + function_shorttime() + " – " + capitalizeFirstLetter(function_pronoun_perfect()) + " just returned from a visit to " + function_possessives() + " landlord – the solitary " + function_people() + " that " + function_pronoun( )+ " shall be troubled with. ";
}

function crumb98 () {
    where2begin = where2begin + "\'Where's " + function_people() + " going with that " + function_things() + "?' said " + function_name() + " to " + function_possessives() + " " + function_people() + " as they were setting the table for breakfast. ";
}

function crumb99 () {
    where2begin = where2begin + "This is a tale of a meeting of two " + function_people_adjectives() + ", " + function_people_adjectives() + ", fairly " + function_people_adjectives() + " " + function_people() + " on a planet which was dying fast. ";
}

function crumb100 () {
    where2begin = where2begin + function_name() + " " + function_name() + " was not " + function_people_adjectives() + ", but " + function_people() + " seldom realized it when caught by " + function_possessives() + " charm as the " + function_name() + " twins were. ";
}
function randomFrom(array) {return array[Math.floor(Math.random() * array.length)];}
function where2begin_run() {
    var func = randomFrom(['crumb1', 'crumb2', 'crumb3', 'crumb4', 'crumb5', 'crumb6', 'crumb7', 'crumb8', 'crumb9', 'crumb10', 'crumb11', 'crumb12', 'crumb13', 'crumb14', 'crumb15', 'crumb16', 'crumb17', 'crumb18', 'crumb19', 'crumb20', 'crumb21', 'crumb22', 'crumb23', 'crumb24', 'crumb25', 'crumb26', 'crumb27', 'crumb28', 'crumb29', 'crumb30', 'crumb31', 'crumb32', 'crumb33', 'crumb34', 'crumb35', 'crumb36', 'crumb37', 'crumb38', 'crumb39', 'crumb40', 'crumb41', 'crumb42', 'crumb43', 'crumb44', 'crumb45', 'crumb46', 'crumb47', 'crumb48', 'crumb49', 'crumb50', 'crumb51', 'crumb52', 'crumb53', 'crumb54', 'crumb55', 'crumb56', 'crumb57', 'crumb58', 'crumb59', 'crumb60', 'crumb61', 'crumb62', 'crumb63', 'crumb64', 'crumb65', 'crumb66', 'crumb67', 'crumb68', 'crumb69', 'crumb70', 'crumb71', 'crumb72', 'crumb73', 'crumb74', 'crumb75', 'crumb76', 'crumb77', 'crumb78','crumb79', 'crumb80', 'crumb81', 'crumb82', 'crumb83', 'crumb84', 'crumb85', 'crumb86', 'crumb87', 'crumb88', 'crumb89', 'crumb90', 'crumb91', 'crumb92', 'crumb93', 'crumb94', 'crumb95', 'crumb96', 'crumb97', 'crumb98', 'crumb99', 'crumb100']);
    window[func]();
}
