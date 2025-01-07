export interface Choice {
  [key: string]: [number, string[]];
}

export interface GameState {
  text: string;
  image: string;
  choices: Choice;
}

const gameData: Record<number, GameState> = {
  1: {
    text: "You just woke up in AmuseableLand on a Saturday and are wondering what to do.",
    image: "/larger_images/goodmorning.png",
    choices: {
      "Scroll on my phone for a bit": [2, ["Peanut", "Croissant", "Toast"]],
      "Go back to bed": [2, ["Cloud", "Pickle"]],
      "See what my friends are up to": [3, ["Tennis Ball", "Strawberry", "Disco Ball", "Sun", "Bubble Tea"]],
      "Go and grab caffeine asap": [36, ["Peanut", "Croissant", "Toast"]]
    }
  },
  2: {
    text: "After your slow morning, you eventually get up to brush your teeth. Suddenly the phone rings!",
    image: "/larger_images/phone_ring.png",
    choices: {
      "It's probably my mom": [4, ["Cloud", "Strawberry", "Croissant",]],
      "OMG I forgot I was hanging with Susie the Strawberry this morning!": [4, ["Strawberry", "Tennis Ball", "Disco Ball"]],
      "Can I just wait until it goes to voicemail?": [4, ["Sun", "Peanut", "Toast", "Pickle"]]
    }
  },
  3: {
    text: "You check your phone and it turns out that Timmy the Tennis Ball is inviting you to join some friends at the farmer's market!",
    image: "/larger_images/timmy_hangout.png",
    choices: {
      "Sounds fun, let's go!": [5, ["Disco Ball", "Peanut"]],
      "I need groceries anyways": [5, ["Toast", "Bubble Tea"]],
      "Anywhere there's food I'm down!": [5, ["Croissant", "Sun", "Pickle", "Cloud"]],
      "I actually did have plans with Susie...": [22, ["Tennis Ball", "Strawberry",]]
    }
  },
  4: {
    text: "It turns out that it is Timmy the Tennis Ball inviting you to join some friends at the farmer's market!",
    image: "/larger_images/timmy_hangout.png",
    choices: {
      "Sounds fun, let's go!": [5, ["Disco Ball", "Peanut"]],
      "I need groceries anyways": [5, ["Toast", "Bubble Tea"]],
      "Anywhere there's food I'm down!": [5, ["Croissant", "Sun", "Pickle", "Cloud"]],
      "I actually did have plans with Susie...": [22, ["Tennis Ball", "Strawberry",]]
    }
  },
  5: {
    text: "You head to the farmer's market, and it's really crowded! You find your friends but realize they're having trouble meeting up with another pal, Angie the Acorn.",
    image: "/larger_images/farmers_market_friends.png",
    choices: {
      "Let Becky the Bubble Tea find her, she's tall ": [6, ["Toast", "Strawberry"]],
      "Stay put and let Angie the Acorn find us": [7, ["Tennis Ball", "Bubble Tea"]],
      "Buy a pastry in the meantime while you wait!": [6, ["Disco Ball, Croissant"]]
    }
  },
  6: {
    text: "Becky the Bubble Tea checked her FindMyAmuseable app and says that Angie is near the Bamboo forest entrance! You've never been there before, but Timmy the Tennis Ball says it's haunted.",
    image: "/larger_images/timmy_find_angie.png",
    choices: {
      "This is why we should let Angie find US!": [7, ["Bubble Tea", "Tennis Ball", "Toast", "Cloud", "Disco Ball"]],
      "Let's go and find her!": [15, ["Peanut", "Strawberry", "Sun", "Croissant"]],
    }
  },
  7: {
      text: "Luckily, Angie the Acorn shows up a few minutes later. \"Sorry to keep you guys waiting! A squirrel was attacking my home this morning!\"",
      image: "/larger_images/angie_home.png",
      choices: {
          "Is everything ok??": [8, ["Cloud", "Peanut", "Croissant", "Strawberry"]],
          "Man, all that waiting made me hungry!": [8, ["Pickle", "Bubble Tea","Disco Ball"]],
      }
    },
  8: {
      text: "You and your friends decide to head over to the fruit stand. Suddenly, you hear tons of noise coming from the cheese stand nearby!",
      image: "/larger_images/cheese_noise.png",
      choices: {
          "What's happening over there???": [9, ["Strawberry", "Tennis Ball", "Sun", "Disco Ball"]],
          "Do we need to run away right now?": [9, ["Bubble Tea"]],
          "We must save the cheese!!!": [9, ["Peanut", "Strawberry"]],
      }
  },
  9: {
      text: "Turns out a bunch of birds were attacking the cheese! You and your friends help the owner clean everything up, and the owner offers you a cheese of any choice.",
      image: "/larger_images/cheese_chase.png",
      choices: {
          "Cheddar!!!": [10, ["Peanut", "Croissant"]],
          "Brie pls": [10, ["Tennis Ball", "Disco Ball", "Pickle"]],
          "I'm lactose intolerant": [10, ["Cloud", "Bubble Tea"]]
      }
  },
  10: {
      text: "After the farmer's market closes your friends still want to hang out!",
      image: "/larger_images/timmy_activities.png",
      choices: {
          "Let's go to the movies!": [11, ["Disco Ball", "Peanut", "Bubble Tea"]],
          "I just want to go home and get back to my book": [32, ["Cloud", "Croissant", "Toast"]],
          "Invite your friends over": [32, ["Sun", "Strawberry"]],
          "Go to the arcade with them!": [41, ["Pickle", "Bubble Tea"]]
      }
  },
  11: {
    text: "Everyone thinks the movies are a great idea! What type of movie do you want to watch?",
    image: "/larger_images/movie_genres.png",
    choices: {
      "Something with action!": [12, ["Toast"]],
      "Something funny and heartwarming": [12, ["Peanut", "Bubble Tea"]],
      "A dramedy": [12, ["Croissant"]],
      "A foreign film": [12, ["Pickle", "Cloud"]]
    }
  },
  12: {
    text: "You and your friends come down to three options- ",
    image: "/larger_images/movie_options.png",
    choices: {
      "Gladiator 2": [13, ["Pickle", "Tennis Ball", "Disco Ball"]],
      "Wicked": [13, ["Croissant"]],
      "Despicable Me 4": [13, ["Peanut", "Strawberry"]]
    }
  },
  13: {
    text: "Majority rules for Despicable Me 4! Everyone is in a goofy mood.",
    image: "/larger_images/minion.png",
    choices: {
      "I love minions!!": [33, ["Strawberry", "Cloud"]],
      "I've already seen it 2000x": [33, ["Toast", "Peanut"]],
      "I'm just going because my friends want to": [33, ["Disco Ball", "Sun", "Pickle"]]
    }
  },
  15: {
    text: "As you approach the Bamboo Forest entrance, suddenly it gets colder and darker...",
    image: "/larger_images/sun_bamboo_forest.png",
    choices: {
      "Pull out your jacket you brought!": [16, ["Toast", "Bubble Tea"]],
      "Huddle with Sam the Sun for warmth": [16, ["Disco Ball", "Croissant"]],
    }
  },
  16: {
    text: "All of a sudden Angie the Acorn hops out of a nearby tree and yells, \"RUN, EVERYONE!!\"",
    image: "/larger_images/angie_run.png",
    choices: {
      "Jump up and start sprinting as fast as you can out of there!": [17, ["Disco Ball", "Croissant", "Sun"]],
      "Stay and ask, \"WHAT'S WRONG?!\"": [40, ["Tennis Ball", "Pickle", "Toast", "Peanut", "Bubble Tea"]],
    }
  },
  17: {
    text: "You run a few meters away when you realize Angie is laughing. It was actually just a prank...",
    image: "/larger_images/angie_gotcha.png",
    choices: {
      "Angie!!!!! >:( I unfriend you!": [18, ["Bubble Tea", "Strawberry", "Disco Ball", "Peanut", "Tennis Ball"]],
      "haha. very funny.": [18, ["Tennis Ball", "Toast", "Sun", "Pickle"]],
      "Bruh": [18, ["Cloud", "Croissant"]]
    }
  },
  18: {
    text: "While you guys are in the forest, you notice the bamboo has legs! You must have stumbled into someone's home!",
    image: "/larger_images/bamboo_forest_big.png",
    choices: {
      "Let's leave asap and make as little noise as possible": [19, ["Peanut", "Croissant"]],
      "Is anyone home? Hello?": [19, ["Pickle", "Tennis Ball", "Disco Ball", "Toast"]],
      "We're already here, let's see if we can make any friends!": [19, ["Bubble Tea", "Sun"]]
    }
  },
  19: {
    text: "One of the bigger bamboo plants notices your friend group and says, \"In order to return home safely, you must give us something of yours.\"",
    image: "/larger_images/bamboo_forest_question.png",
    choices: {
      "I have my bag we can look through!": [20, ["Toast", "Bubble Tea", "Strawberry", "Tennis Ball"]],
      "Uhhh I have some leftover pastry crumbs?": [20, ["Pickle", "Disco Ball", "Sun"]],
      "Sorry, guys I'm a minimalist": [20, ["Cloud"]]
    }
  },
  20: {
    text: "Between you and your friends, the best you guys could find is an old pair of sunglasses, a jade necklace, and an arcade token.",
    image: "/larger_images/sunglasses_necklace_token.png",
    choices: {
      "Give the sunglasses! We don't need them": [21, ["Peanut", "Bubble Tea", "Disco Ball"]],
      "Give the jade necklace? Maybe it's valuable!": [21, ["Toast", "Pickle", "Tennis Ball"]],
      "Give the token": [21, ["Strawberry", "Croissant"]]
    }
  },
  21: {
    text: "The bamboo plants are pleased with your gift! They start swaying and you are suddenly whisked away by the breeze!",
    image: "/larger_images/sparkles_wind.png",
    choices: {
      "AHHHHHHHH!!!!": [29, ["Tennis Ball", "Bubble Tea",]],
      "I wish I had my camera!": [29, ["Croissant", "Disco Ball"]],
      "Am I dreaming?!": [29, ["Toast", "Sun", "Cloud"]]
    }
  },
  22: {
    text: "You call Susie the Strawberry and she asks what you guys want to do together. What do you suggest?",
    image: "/larger_images/susie_hangout.png",
    choices: {
      "Have a walk and a picnic": [23, ["Cloud", "Toast"]],
      "Invite her over to cook an extravagant meal": [23, ["Peanut", "Pickle"]],
      "Suggest going to the Amuseable Art Museum": [24, ["Bubble Tea", "Disco Ball"]]
    }
  },
  23: {
    text: "Susie actually suggests going to the Amuseable Art Museum, since she's never been! What's your favorite part of visiting a museum?",
    image: "/larger_images/susie_museum.png",
    choices: {
      "Modern Amuseable Art": [25, ["Toast", "Bubble Tea"]],
      "It's all really cool and  there's so much to take in": [25, ["Croissant", "Peanut"]],
      "I love seeing the new featured exhibits!": [25, ["Strawberry"]]
    }
  },
  24: {
    text: "Susie loves the idea of the Amuseable Art Museum, since she's never been! What's your favorite part of visiting a museum?",
    image: "/larger_images/susie_museum.png",
    choices: {
      "Modern Amuseable Art": [25, ["Toast", "Bubble Tea"]],
      "It's all really cool and there's so much to take in": [25, ["Croissant", "Peanut"]],
      "I love seeing the new featured exhibits!": [25, ["Strawberry"]]
    }
  },
  25: {
    text: "You and Susie walk past a painting that looks like it's staring at you. Suddenly, the mouth moves and it says, \"I will give you something magical in return!\"",
    image: "/larger_images/susie_museum_scary.png",
    choices: {
      "What's the catch??": [26, ["Tennis Ball", "Toast"]],
      "THIS CAN'T BE REAL???": [26, ["Peanut", "Bubble Tea"]],
      "Hmmm... What should I wish for??": [26, ["Pickle", "Sun", "Cloud"]],
    }
  },
  26: {
    text: "The painting says \"The catch is that you need to tell me a story that can make me laugh\"",
    image: "/larger_images/susie_museum_story.png",
    choices: {
      "Oh I got this! The funniest thing happened last week to me and Betty the Boiled Egg!": [27, ["Disco Ball", "Strawberry", "Toast", "Pickle"]],
      "Ask Susie if she's got any ideas?": [27, ["Cloud"]],
      "Make up something on the spot": [27, ["Bubble Tea"]]
    }
  },
  27: {
    text: "The painting thought the story you and Susie came up with was just good enough! Your reward options are:",
    image: "/larger_images/magic_choices.png",
    choices: {
      "A magic wand that can only do good": [28, ["Cloud", "Croissant"]],
      "A magic spell that allows you to read minds": [28, ["Bubble Tea"]],
      "A magic rock that allows you to turn invisible": [28, ["Toast", "Peanut"]],
    }
  },
  28: {
    text: "After you make your decision, you start to feel a tingling sensation from your head to your toes!",
    image: "/larger_images/sparkles.png",
    choices: {
      "Oo it's working!": [29, ["Pickle", "Sun"]],
      "I'm going to close my eyes!": [34, ["Tennis Ball"]]
    }
  },
  29: {
    text: "You were just whisked away back to your home! You hear noise coming from the backyard...",
    image: "/larger_images/music_house.png",
    choices: {
      "I'll go check it out": [30, ["Bubble Tea", "Disco Ball", "Strawberry"]],
      "Ohmygosh I hope it's not an intruder...": [30, ["Toast", "Croissant"]]
    }
  },
  30: {
    text: "SURPRISE!!! Turns out it's a surprise party for your birthday! Susie was making sure you were distracted.",
    image: "/larger_images/surprise_party.png",
    choices: {
      "Omg thanks guys!! When did you all plan this??": [33, ["Toast", "Peanut"]],
      "Start to cry out of happiness": [33, ["Croissant", "Disco Ball"]],
      "I knew something was sus!": [33, ["Pickle"]]
    }
  },
  32: {
    text: "You head home and SURPRISE!!! Turns out it's a surprise party for your birthday! Timmy was making sure you were distracted.",
    image: "/larger_images/surprise_party.png",
    choices: {
      "Omg thanks guys!! When did you all plan this??": [33, ["Toast", "Peanut", "Bubble Tea"]],
      "Start to cry out of happiness": [33, ["Croissant", "Disco Ball", "Strawberry"]],
      "I knew something was sus!": [33, ["Pickle"]]
    }
  },
  33: {
      text: "Woohoo! Last question- after a long day of hanging out with friends, everyone leaves and you decide to ...",
      image: "/larger_images/activities_options.png",
      choices: {
        "eat some late night ramen noodles": [0, ["Pickle", "Croissant"]],
        "have a self care night": [0, ["Peanut"]],
        "play some video games": [0, ["Bubble Tea", "Toast", "Tennis Ball"]],
        "journal about your crazy amazing day": [0, ["Cloud"]]
      }
    },
  34: {
    text: "When you open your eyes- you're actually in bed! Turns out that was all a dream. Last question- what do you do now?",
    image: "/larger_images/bed.png",
    choices: {
      "Wish that could have happened irl": [0, ["Croissant", "Peanut"]],
      "Call up Susie and tell her about the crazy dream you just had": [0, ["Strawberry", "Tennis Ball"]],
      "Go back to bed again..": [0, ["Toast", "Bubble Tea"]]
    }
  },
  36: {
      text: "You walk to a nearby cafe and run into Susie the Strawberry! She asks if you're free to hang out",
      image: "/larger_images/susie_hangout.png",
      choices: {
          "Hang with Susie": [37, ["Tennis Ball", "Sun"]],
          "Say no because you already have plans with other friends": [5, ["Strawberry", "Disco Ball"]],
      }
  },
  37: {
      text: "You decide that hanging with Susie sounds fun! What do you suggest?",
      image: "/larger_images/susie_picnic_pasta_art.png",
      choices: {
          "Have a walk and a picnic": [38, ["Pickle", "Disco Ball"]],
          "Invite her over to cook an extravagant meal": [38, ["Toast", "Bubble Tea"]],
          "Suggest going to the Amuseable Art Museum": [24, ["Croissant", "Sun"]]
      }
  },
  38: {
      text: "Susie thinks that making lunch together and then eating outside sounds really nice! What kind of lunch are you going to make?",
      image: "/larger_images/lunch_options.png",
      choices: {
          "fruit with a sandwich and chips": [39, ["Toast"]],
          "salad and protein shake": [39, ["Pickle"]],
          "sushi and snappeas": [39, ["Croissant"]]
      }
  },
  39: {
      text: "Yum!! After you finish making lunch, you head to the park and take a shortcut through the Bamboo Forest. Susie says, \" I heard it's haunted!\"",
      image: "/larger_images/susie_haunted.png",
      choices: {
          "Yikes.. I dunno about this...": [16, ["Peanut", "Tennis Ball", "Strawberry", "Cloud"]],
          "If it's the shorter route, I'm all for it!": [16, ["Pickle", "Bubble Tea"]],
          "We'll be fine, we're together!": [16, ["Toast"]]
      }
  },
  40: {
      text: "After you see Angie's face up close, you realize that she's laughing at you!! It was a prank.",
      image: "/larger_images/angie_gotcha.png",
      choices: {
          "Angie!!!!! >:( I unfriend you!": [18, ["Bubble Tea", "Strawberry", "Disco Ball", "Peanut", "Tennis Ball"]],
          "haha. very funny.": [18, ["Tennis Ball", "Toast", "Sun", "Pickle"]],
          "Bruh": [18, ["Cloud", "Croissant"]]
    }
  },
  41: {
      text: "You and your friends head to the Amuseable Arcade! What game are you going to play first?",
      image: "/larger_images/arcade_options.png",
      choices: {
          "Pac-Man": [42, ["Toast", "Peanut"]],
          "Tetris": [42, ["Tennis Ball", "Croissant"]],
          "Teenage Mutant Ninja Turtles": [42, ["Disco Ball", "Strawberry"]],
          "Mario Kart": [42, ["Pickle", "Sun", "Cloud"]]
    }
  },
  42: {
      text: "You grab another token to go play another game and Sam the Sun says, \"That token looks like it's glowing!\"",
      image: "/larger_images/sun_glow_coin.png",
      choices: {
          "Give it to someone who works here": [45, ["Strawberry", "Toast"]],
          "Try to open the token": [44, ["Pickle"]],
          "Maybe it'll do something if we just wait": [44, ["Croissant"]],
    }
  },
  44: {
      text: "The token pops open and inside is a glowing jewel! You and your friends are in awe.",
      image: "/larger_images/sun_glow_coin_gem.png",
      choices: {
          "OMG how much do you think this is worth": [46, ["Bubble Tea", "Disco Ball"]],
          "How did this get here???": [46, ["Toast", "Peanut", "Pickle"]],
          "Is this thing even from our world?": [46, ["Cloud", "Sun"]],
    }
  },
  45: {
      text: "You and your friends look around for someone but oddly enough don't see anyone... You guys just decide to open it and inside is a glowing jewel!",
      image: "/larger_images/sun_glow_coin_gem.png",
      choices: {
          "OMG how much do you think this is worth": [46, ["Bubble Tea", "Disco Ball"]],
          "How did this get here???": [46, ["Toast", "Peanut", "Pickle"]],
          "Is this thing even from our world?": [46, ["Cloud", "Sun"]],
    }
  },
  46: {
      text: "You touch the jewel and suddenly feel a strong breeze whoosh you away!! You close your eyes and think-",
      image: "/larger_images/sparkles_wind.png",
      choices: {
          "AHHHHHHHH!!!!": [29, ["Pickle", "Bubble Tea", "Disco Ball"]],
          "I wish I had my camera!": [29, ["Peanut", "Croissant", "Strawberry"]],
          "Am I dreaming?!": [29, ["Toast", "Sun", "Tennis Ball", "Cloud"]]
    }
  }
};

export default gameData;