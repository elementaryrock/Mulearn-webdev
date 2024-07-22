const customName = document.getElementById('customname');
        const randomize = document.querySelector('.randomize');
        const story = document.querySelector('.story');

        let x=["Willy the Goblin","Big Daddy","Father Christmas"]
        let y=["the soup kitchen","Disneyland","the White House"]
        let z=["spontaneously combusted","melted into a puddle on the sidewalk","turned into a slug and crawled away"]

        let storyst="It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

        function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
        }

        randomize.addEventListener('click', () => result(storyst));

        function result(storyst) {

        storyst=storyst.replaceAll(":insertx:",randomValueFromArray(x))
        storyst=storyst.replaceAll(":inserty:",randomValueFromArray(y))
        storyst=storyst.replaceAll(":insertz:",randomValueFromArray(z))
        

        if(customName.value !== '') {
            const name = customName.value;
            storyst=storyst.replace("Bob",name)
        }

        if(document.getElementById("uk").checked) {
            const weight = Math.round(300);
            const temperature =  Math.round(94);
            let ctemp=(temperature-32)*(5/9)
            ctemp=ctemp.toFixed(0)
            let kg=weight/2.2046
            kg=kg.toFixed(0)
            storyst=storyst.replace("94 fahrenheit",ctemp+" Celsius")
            storyst=storyst.replace("300 pounds",kg+" Kilogram")
        }

        story.textContent = storyst;
        story.style.visibility = 'visible';
        return storyst
        }