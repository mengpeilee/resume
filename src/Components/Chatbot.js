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
        if(respond === 'topics') {
            triggerNextStep({ trigger: 'topics' });
        } else if (respond.includes('school') || respond.includes('program') || respond.includes('university')) {
            setText(`I'm eager to apply to ${steps.school.message} that is the necessary next step in my career development.`);
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
        { value: 'motto', label: 'My Motto', trigger: 'about' },
      ],
    },
    {
        id: 'about',
        component: <About />,
        asMessage: true,
        metadata: {
            about: {hash: '#about', text: "I'm assiduous Software Engineer with over 4 years of experience eager to utilize the Master's degree to solve real-world problems via technology"},
            resume: {hash: '#resume', text: 'I graduated from Fu Jen University and worked as an Sr. Software Engineer in Skywatch.'},
            portfolio: {hash: '#portfolio', text: 'The Page is scrolled to Portfolio section, please close the chatroom and check out some of my works.'},
            motto: {hash: '#motto', text: 'If someone else has done it then you can do it too. If no one has then you can be the first.'},
        },
        trigger: '8'
    },
    {
        id: '8',
        message: 'Ask me any questions or type "topics" to go back to the menu. 😊',
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