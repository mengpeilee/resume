import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import $ from 'jquery';

const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#11ABB0',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#11ABB0',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };
  

const About = (props) => {
    const [topic, setTopic] = useState('');
    const { steps } = props;

    useEffect(() => {
        const currentTopic = steps.topics.value;
        setTopic(currentTopic);
        const target = steps.about.metadata[currentTopic].hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 800, 'swing', function () {
	        window.location.hash = target;
	    });
    }, []);

    return (
    <div>
       {steps.about.metadata[topic] && <div>{steps.about.metadata[topic].text}</div>}
    </div>
    )
}

const Answer = (props) => {
    const { steps, triggerNextStep } = props;
    const [text, setText] = useState('');
    const respond = steps.menu.value.toLowerCase();

    useEffect(() => {
        console.log(steps);
        if(respond === 'menu') {
            triggerNextStep({ trigger: 'topics' });
        } else if (respond.includes('school') || respond.includes('program') || respond.includes('university')) {
            setText(`I'm eager to apply to ${steps.school.message} that is the necessary next step in my career development.`);
        }  else if (respond.includes('old')) {
            setText(`I'm 26 years old`);
        } else if (respond.includes('goal') || respond.includes('objective')) {
            setText(`My goal is to solve real-world problems to improve people’s lives with computer and software technology.`);
        } else if (respond.includes('weak')) {
            setText(`When I have an argument with someone, I’m really rushed. Then I’ll talk to him/her immediately to find the problem. But sometime this is not a good way, because maybe they are in the emotion now, so that might cause the thing worse. Now, when I have an argument with someone,  i’ll make a different decisions which depends on the one of his/her personality.`);
        } else if (respond.includes('strength') || respond.includes('project') || respond.includes('achievement') || respond.includes('accomplishment') || respond.includes('skill')) {
            setText(`I'm familiar with Web and APP development (JS, Swift, C++, React), and I develpded a cross-platform social communication service, with an average of 10,000+ users online at the same time. (tico.app)`);
        } else if (respond.includes('publication')) {
            setText(`Meng-Pei Lee, Hsiang-Yu Hu, Hsing Mei, “Life Chasing: A Location-based Game Prototype for Elderly Health Promotion”, International Conference on Healthcare Service Management (ACM), Japan, 2018, pp. 265-271`);
        } else if (respond.includes('future') || respond.includes('next')) {
            setText(`In the future, I will combine my existing Web and App know-how and what I'll learn from the program to continue in my career path in using software technology to positively impact people’s lives.`)
        } else {
            setText(`Sorry, I can't understand your question but I'm learning now.🙂`);
        }
    }, []);

    return (
        <div>{text}</div>
    )
};


const steps = [
    {
        id: '0',
        message: 'Hi, I`m Meng Pei.',
        trigger: '1',
    },
    {
        id: '1',
        message: 'What is your name?',
        trigger: 'name',
    },
    {
        id: 'name',
        user: true,
        trigger: '3',
    },
    {
        id: '3',
        message: 'Hi {previousValue}! Which institution (University) are you from?',
        trigger: 'school',
    },
    {
        id: 'school',
        user: true,
        trigger: '5'
    },
    {
        id: '5',
        message: 'Please choose the topic you want to know about me.',
        trigger: 'topics',
    },
    {
      id: 'topics',
      options: [
        { value: 'about', label: 'About Me', trigger: 'about'},
        { value: 'resume', label: 'Education & Work', trigger: 'about'},
        { value: 'portfolio', label: 'Projects', trigger: 'about' },
        { value: 'motto', label: 'Motto', trigger: 'about' },
      ],
    },
    {
        id: 'about',
        component: <About />,
        asMessage: true,
        metadata: {
            about: {hash: '#about', text: "I'm a hard-working Software Engineer with over 4 years of experience eager to utilize the Master's degree to solve real-world problems via technology"},
            resume: {hash: '#resume', text: 'I graduated from Fu Jen University and worked as an Sr. Software Engineer in Skywatch.'},
            portfolio: {hash: '#portfolio', text: 'The Page is scrolled to Portfolio section, please close the chatroom and check out some of my works.'},
            motto: {hash: '#motto', text: 'If someone else has done it then you can do it too. If no one has then you can be the first.'},
        },
        trigger: '8'
    },
    {
        id: '8',
        message: 'Ask me any questions or type "menu" to go back to the menu. 😊',
        trigger: 'menu',
        delay: 3,
    },
    {
        id: 'menu',
        user: true,
        trigger: 'answer',
    },
    {
        id: 'answer',
        component: <Answer />,
        asMessage: true,
        trigger: '8',
    }

  ];

const Chatbot = () => {
    return (
        <ThemeProvider theme={theme}>
            <ChatBot 
                headerTitle={"Chat (beta)"}
                steps={steps} 
                recognitionEnable={true}
                botAvatar={'/images/chatbot.png'} 
                floating={true} 
                opened={false}
            />
        </ThemeProvider>
    )
};

export default  Chatbot;