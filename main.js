let choices = ['chariot', 'death', 'devil', 'emperor', 'empress', 'fool', 'hanged-man', 'hermit', 'hierophant', 'high-priestess', 'judgement', 'justice', 'lovers', 'magician', 'moon', 'star', 'strength', 'sun', 'temperance', 'tower', 'wheel-of-fortune', 'world'];
function computerPlay(choices) {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index];
}

const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {

img.addEventListener('click', (e) => {
  const computerSelection = computerPlay(choices);
  if (e.target.classList.contains('card1')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card1").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card1").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card1").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card1").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card1").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card1").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card1").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card1").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card1").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card1").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card1").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card1").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card1").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card1").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card1").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card1").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card1").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card1").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card1").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card1").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card1").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card1").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
  if (e.target.classList.contains('card2')) {
      if (computerSelection === "chariot") {
          let img = document.querySelector(".card2").src = "img/chariot.jpeg"
          document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
      }
      if (computerSelection === "death") {
        let img = document.querySelector(".card2").src = "img/death.jpeg"
        document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "devil") {
        let img = document.querySelector(".card2").src = "img/devil.jpeg"
        document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "emperor") {
        let img = document.querySelector(".card2").src = "img/emperor.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "empress") {
        let img = document.querySelector(".card2").src = "img/empress.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "fool") {
        let img = document.querySelector(".card2").src = "img/fool.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "hanged-man") {
        let img = document.querySelector(".card2").src = "img/hanged-man.jpeg"
        document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "hermit") {
        let img = document.querySelector(".card2").src = "img/hermit.jpeg"
        document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "hierophant") {
        let img = document.querySelector(".card2").src = "img/hierophant.jpeg"
        document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "high-priestess") {
        let img = document.querySelector(".card2").src = "img/high-priestess.jpeg"
        document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "judgement") {
        let img = document.querySelector(".card2").src = "img/judgement.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "justice") {
        let img = document.querySelector(".card2").src = "img/justice.jpeg"
        document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "lovers") {
        let img = document.querySelector(".card2").src = "img/magician.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "magician") {
        let img = document.querySelector(".card2").src = "img/magician.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "moon") {
        let img = document.querySelector(".card2").src = "img/moon.jpeg"
        document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "star") {
        let img = document.querySelector(".card2").src = "img/star.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "strength") {
        let img = document.querySelector(".card2").src = "img/strength.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "sun") {
        let img = document.querySelector(".card2").src = "img/sun.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "temperance") {
        let img = document.querySelector(".card2").src = "img/temperance.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "tower") {
        let img = document.querySelector(".card2").src = "img/tower.jpeg"
        document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "wheel-of-fortune") {
        let img = document.querySelector(".card2").src = "img/wheel-of-fortune.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "world") {
        let img = document.querySelector(".card2").src = "img/world.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
}
if (e.target.classList.contains('card3')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card3").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card3").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card3").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card3").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card3").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card3").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card3").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card3").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card3").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card3").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card3").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card3").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card3").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card3").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card3").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card3").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card3").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card3").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card3").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card3").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card3").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card3").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card4')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card4").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card4").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card4").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card4").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card4").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card4").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card4").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card4").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card4").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card4").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card4").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card4").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card4").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card4").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card4").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card4").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card4").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card4").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card4").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card4").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card4").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card4").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card5')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card5").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card5").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card5").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card5").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card5").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card5").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card5").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card5").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card5").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card5").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card5").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card5").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card5").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card5").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card5").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card5").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card5").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card5").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card5").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card5").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card5").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card5").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card6')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card6").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card6").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card6").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card6").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card6").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card6").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card6").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card6").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card6").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card6").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card6").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card6").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card6").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card6").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card6").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('NO');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card6").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card6").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card6").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card6").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card6").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card6").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card6").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card7')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card7").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card7").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card7").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card7").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card7").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card7").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card7").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card7").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card7").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card7").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card7").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card7").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card7").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card7").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card7").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card7").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card7").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card7").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card7").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card7").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card7").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
      document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card7").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card8')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card8").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card8").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card8").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card8").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card8").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card8").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card8").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card8").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card8").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card8").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card8").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card8").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card8").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card8").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card8").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card8").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card8").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card8").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card8").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card8").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card8").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card8").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card8')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card8").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card8").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card8").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card8").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card8").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card8").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card8").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card8").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card8").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card8").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card8").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card8").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card8").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card8").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card8").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card8").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card8").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card8").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card8").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card8").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card8").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card8").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card9')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card9").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card9").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card9").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card9").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card9").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card9").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card9").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card9").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card9").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card9").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card9").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card9").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card9").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card9").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card9").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card9").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card9").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card9").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card9").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card9").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card9").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card9").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card10')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card10").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card10").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card10").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card10").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card10").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card10").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card10").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card10").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card10").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card10").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card10").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card10").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card10").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card10").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card10").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card10").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card10").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card10").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card10").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card10").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card10").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card10").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card11')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card11").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card11").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card11").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card11").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card11").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card11").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card11").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card11").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card11").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card11").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card11").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card11").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card11").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card11").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card11").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card11").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card11").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card11").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card11").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card11").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card11").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card11").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
if (e.target.classList.contains('card12')) {
    if (computerSelection === "chariot") {
        let img = document.querySelector(".card12").src = "img/chariot.jpeg"
        document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
    }
    if (computerSelection === "death") {
      let img = document.querySelector(".card12").src = "img/death.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "devil") {
      let img = document.querySelector(".card12").src = "img/devil.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "emperor") {
      let img = document.querySelector(".card12").src = "img/emperor.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "empress") {
      let img = document.querySelector(".card12").src = "img/empress.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "fool") {
      let img = document.querySelector(".card12").src = "img/fool.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hanged-man") {
      let img = document.querySelector(".card12").src = "img/hanged-man.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hermit") {
      let img = document.querySelector(".card12").src = "img/hermit.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "hierophant") {
      let img = document.querySelector(".card12").src = "img/hierophant.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "high-priestess") {
      let img = document.querySelector(".card12").src = "img/high-priestess.jpeg"
      document.getElementById("result").textContent = "MAYBE";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "judgement") {
      let img = document.querySelector(".card12").src = "img/judgement.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "justice") {
      let img = document.querySelector(".card12").src = "img/justice.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "lovers") {
      let img = document.querySelector(".card12").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "magician") {
      let img = document.querySelector(".card12").src = "img/magician.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "moon") {
      let img = document.querySelector(".card12").src = "img/moon.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "star") {
      let img = document.querySelector(".card12").src = "img/star.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "strength") {
      let img = document.querySelector(".card12").src = "img/strength.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "sun") {
      let img = document.querySelector(".card12").src = "img/sun.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "temperance") {
      let img = document.querySelector(".card12").src = "img/temperance.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "tower") {
      let img = document.querySelector(".card12").src = "img/tower.jpeg"
      document.getElementById("result").textContent = "NO";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "wheel-of-fortune") {
      let img = document.querySelector(".card12").src = "img/wheel-of-fortune.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
  if (computerSelection === "world") {
      let img = document.querySelector(".card12").src = "img/world.jpeg"
      document.getElementById("result").textContent = "YES";
        document.getElementById("result").classList.add('result');
  }
}
});
});

