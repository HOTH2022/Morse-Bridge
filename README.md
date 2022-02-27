# Morse Bridge

To run: ```npm run ios```

## Inspiration
Deafblind people, while having ways of communicating with others in the near distance, like sign language, tactile sign language, or print on palm, have a severe difficulty of communicating within long-distance through electronic media like phone or computer, which heavily restrict their scope of communication, leading to some potentially negative situations where they are alone while needing help or needing communication with people far from them. Based on this, we want to design a mobile application that can help address the long-distance communication of deafblind people.

## What it does
Our mobile application supports deafblind people's long-distance communication through two-way translation: from deafblind people to non-deafblind people, we allow the former to use morse code by pressing the screen to generate corresponding text that can be sent to other people in the other user end;

from non-deafblind people to deafblind people, our application can allow them to input text and the content will be transformed into morse code in vibration form to let deafblind people read the message through their phone's vibration.

With the support of these two translations, our application allowed us to achieve potentially communication not only between deafblind people and non-deafblind people but also between deafblind people and deafblind people. Meanwhile, we designed to have more supportive functionalities to assist deafblind people to make the communication even more convenient, like reserved sentences that can be auto-generated when using a particular touching pattern.

## How we built it
We made the initial frameworks with React Native, which can be supported on both IOS and Andriod platforms, extending the accessibility of the application. Then we built a responsive Mobile App using DOM, CSS, Javascript on the front end. We set up flexible components and hooks for the main interaction of the user input(press with different duration or plain text) to timely translate the input message.

## Challenges we ran into
We wanted to implement the feature of vibration where · has a lighter vibration and – has a heavier vibration. However, when we realized that the vibration duration in iOS was not configurable in React Native. Also, the vibration is implemented in an asynchronous manner which fails to communicate in Morse Code. It took us a long time before switching to expo-haptics and finally achieving this functionality.

## What's next for Morse Bridge
While we have achieved the core functionality of transforming the messages in two directions(morse code in pressing form -> plain text; plain text -> vibration morse code), there is much more we can do to improve our application! We can set up a backend server to store the general pattern sentences user(deafblind people) normally use and allow them to pick out these pattern sentences through simple pressing patterns; we can also allow users to have their friends lists to communicate with multiple people. Lastly, we have not finished the requests sending and receiving part, the chat functionalities of two end systems, thus needing more improvement.
