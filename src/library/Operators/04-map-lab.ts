import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';
// Body reference
const body = document.querySelector('body');

// Create a elements
const bodyText = document.createElement('div');
const progressDiv = document.createElement('div');

// Set elements
progressDiv.setAttribute('class','progress-bar');
bodyText.innerHTML = `Magna aute nisi proident aliqua esse est dolore aliquip cillum sint adipisicing fugiat. Ipsum pariatur magna enim dolore ex nisi labore quis deserunt anim excepteur reprehenderit laborum officia. Lorem ut aliquip deserunt quis incididunt in sunt minim minim ipsum. Nisi do adipisicing labore nisi elit aute nostrud laboris reprehenderit in voluptate id. Magna voluptate excepteur esse pariatur Lorem quis aute laboris. Consequat excepteur fugiat magna culpa qui elit tempor eiusmod.
<br/><br/>
Culpa aliquip tempor aute labore nulla consequat eiusmod. Reprehenderit reprehenderit veniam irure cupidatat nisi amet nisi. Veniam labore officia eiusmod non veniam fugiat dolor laboris reprehenderit proident ullamco id sit minim. Dolor tempor voluptate ullamco reprehenderit consequat occaecat cillum. Dolor pariatur exercitation anim velit velit consequat aute non velit. Laboris consequat voluptate excepteur quis nostrud tempor consectetur labore culpa amet esse sit.
<br/><br/>
Voluptate mollit cupidatat duis elit incididunt incididunt ut pariatur aliquip sint ullamco veniam ad. Sit eu laborum ipsum incididunt nostrud Lorem enim. Duis do aute ea labore sunt sint excepteur ipsum. Cupidatat enim reprehenderit reprehenderit id excepteur voluptate nisi. Adipisicing aliquip deserunt do sunt minim. Irure ipsum nisi incididunt in aliquip commodo magna irure.
<br/><br/>
Commodo enim magna duis amet laborum nulla dolore laboris in est. Reprehenderit labore eu elit esse dolore elit aliquip ipsum ut. Consequat id ut id cillum elit cupidatat id aliquip sit. Culpa ullamco veniam commodo id enim non consectetur consequat veniam adipisicing enim. Proident cupidatat eiusmod adipisicing consequat ex non. Dolor exercitation ullamco ad labore voluptate amet incididunt.
<br/><br />
Do Lorem est eiusmod et fugiat minim. Laborum elit id voluptate commodo sint consequat dolore tempor et. Et consectetur nisi adipisicing cillum quis. Excepteur ipsum do dolore eu fugiat ea elit.
<br/><br />
Anim qui incididunt quis aute occaecat duis. Dolor aute fugiat sit minim ea laborum deserunt mollit ex amet elit. Sunt qui dolor Lorem reprehenderit elit deserunt.
<br/><br />
Officia est laborum sint consectetur veniam dolor ex do voluptate. Nisi ullamco laborum officia mollit laboris et laborum eiusmod exercitation. Do eu irure reprehenderit aliqua in labore consequat amet.
<br/><br />
Aute laborum reprehenderit incididunt adipisicing consequat adipisicing. Occaecat incididunt ea amet consectetur reprehenderit. Fugiat adipisicing adipisicing laboris nostrud consequat non aute excepteur ea fugiat ut excepteur enim incididunt. Amet incididunt proident consectetur est sint. Mollit commodo aliqua velit reprehenderit minim exercitation sint Lorem culpa ipsum pariatur ea nisi.
<br/><br />
Tempor esse laborum occaecat do occaecat irure fugiat quis est exercitation. Commodo nostrud dolor ut in id esse aliqua ipsum irure amet aliqua nostrud. Commodo eu nostrud aliqua occaecat. Non eu proident anim sunt laboris nisi duis aute ipsum ex reprehenderit veniam eiusmod.
<br/><br />
Nulla proident dolor amet quis esse eiusmod. Ipsum ut consequat nulla eu qui nostrud enim ullamco voluptate dolore. Officia tempor dolor adipisicing labore pariatur. Occaecat ullamco pariatur nostrud ullamco exercitation qui amet mollit sint incididunt aliquip elit ullamco.
<br/><br />
Id minim deserunt nulla sint incididunt. In veniam eu nulla fugiat nostrud enim et consequat enim minim. Ad veniam voluptate esse incididunt nulla non anim velit eiusmod veniam officia nisi.
<br/><br />
In culpa consectetur proident cillum laboris sint dolore qui ullamco non aliquip enim. Dolore ut in exercitation officia dolor consectetur fugiat aliqua deserunt officia. Exercitation do non ullamco Lorem elit quis mollit aute proident elit aliquip pariatur. Labore duis do deserunt eu non. Magna veniam id proident eu eiusmod sint qui quis et incididunt tempor id nisi.
<br/><br />
Irure commodo cupidatat pariatur Lorem adipisicing aliquip ipsum velit qui aute esse cillum magna incididunt. Nostrud veniam ad in est commodo nisi dolore eu. Laborum fugiat tempor culpa minim nostrud. Commodo aliqua magna in voluptate eiusmod ex aliquip. Lorem officia exercitation cillum ad minim est ut magna tempor.
<br/><br />
Ex incididunt enim velit nisi fugiat sunt esse amet nostrud enim. Nulla consectetur id enim anim dolor cillum ullamco id eiusmod esse elit laborum id. Dolore irure qui deserunt ea duis aliquip incididunt ipsum occaecat enim. Nulla aute dolore dolor duis dolor eu ullamco reprehenderit dolore. Eu cupidatat enim consequat exercitation sit adipisicing est quis sint excepteur cillum cupidatat.
<br/><br />
Proident dolor laboris ex dolore non nisi incididunt laboris cillum sunt ullamco aliquip. Id sit nisi consectetur exercitation id elit mollit Lorem. Pariatur velit occaecat adipisicing et irure. Lorem amet ut voluptate velit pariatur pariatur irure minim cupidatat enim amet ullamco. Ex amet duis non proident aliqua culpa enim et officia do fugiat elit consequat proident. Minim deserunt minim labore nostrud occaecat ut est reprehenderit ullamco ex laboris proident ullamco.
`;

//Add new elements
body.append(bodyText);
body.append(progressDiv);

// Create a method for calculate the percentage in the scroll
const onCalculateScrollPercentage = (event: any) => {
    const { scrollTop, scrollHeight, clientHeight } = event.target.documentElement;
    return (scrollTop / (scrollHeight - clientHeight ) ) * 100;
}

// Set observable for listen the changes on th DOM
fromEvent(document, 'scroll')
    .pipe(
        map(onCalculateScrollPercentage)
    )
    .subscribe(pecentage => progressDiv.style.width = `${pecentage}%`)



