import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const WorkingTimeline = () => {
  return (
    <div className='mt-8 px-4'>
      <h2 className='text-3xl font-semibold px-5 mb-2'>Typing Speed Test</h2>
      <Timeline className='mt-2'>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            {/* <Timeline.Time>1 STEP</Timeline.Time> */}
            <Timeline.Title>Why Does Typing Speed Matter</Timeline.Title>
            <Timeline.Body>
            Typing speed is crucial in today’s fast-paced digital world. Whether you’re drafting emails, coding, or working on creative projects, faster typing helps you save time and boost productivity. It also improves focus by allowing your thoughts to flow seamlessly onto the screen. For professionals, students, and gamers alike, better typing speed means staying ahead and getting more done efficiently.
            </Timeline.Body>
            <Button color="gray">
              Learn More
              <HiArrowNarrowRight className="ml-2 h-3 w-3" />
            </Button>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            {/* <Timeline.Time>2 STEP</Timeline.Time> */}
            <Timeline.Title>What is WPM?</Timeline.Title>
            <Timeline.Body>
            WPM, or Words Per Minute, is a standard measure of typing speed. It calculates how many words you can type in one minute, with a "word" typically defined as five characters, including spaces. WPM is used to gauge typing efficiency and is a key metric for improving speed and accuracy in typing tests and real-world tasks.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            {/* <Timeline.Time>April 2022</Timeline.Time> */}
            <Timeline.Title>Master the Art of Typing</Timeline.Title>
            <Timeline.Body>
            Typing is more than just a skill—it’s a gateway to productivity and creativity in the digital age. Whether you're writing emails, coding, or working on assignments, typing efficiently saves time and enhances focus. Improving your typing speed and accuracy can help you communicate ideas seamlessly and unlock new opportunities in both personal and professional life. Start practicing today and experience the difference!
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  )
}

export default WorkingTimeline