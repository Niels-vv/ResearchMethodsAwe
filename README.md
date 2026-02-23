# Conversational agents on Awe for TU/e Research Methods
This repo contains HTML and CSS example files for a website embedding chatbots on awe. Clone the repo and edit the files to your needs. HTML and CSS files contain examples of question types and layout which you can use and adjust to your liking.

A running example of this repo can be seen at: https://niels-vv.github.io/. This example only differs from the code in this repo in that it shows all 4 possible chats and indicates the variant, so you can try them out yourself.

## Conversational Agents
Chatting with the conversational agent (CA) is embedded into the page (see index.html) using the boostai.js file. By default there are 4 CAs that can be used, each talking about and reflecting on everyday awe from a sunset. Each agent goes through different aspects of awe; these are derived from psychology literature on awe, see e.g. https://psycnet.apa.org/record/2018-35661-001 for the different subscales of the Awe-S scale. It addresses each subscale in 1 or 2 interactions.

The 4 variations come from a factorial combination of 2 factors: (1) Recalling a lived experience of the user vs. imagining a new scenario. For the recall variant, the agent asks the user to recall and reflect on a particularly beautiful sunset they have experienced in their lives. For the imagining variant, the agent takes the user on an imaginary walk through the forest while watching a sunset. (2) 1st vs. 2nd person perspective. For the 1st person perspective, the agent assumes the role of a butterfly and shares its own experience (either of recalling a sunset or of its experience during the awe-walk through the forest). For the 2nd person perspective it does not assume an "I".

The HTML file contains a button to open the chat. This calls the "openChat" function from boostai.js, passing a chatbot ID. The code shows how to access each variant with a different ID.

### Chatbot content / flow
Focusing on the 2nd person Imagined chatbot, it currently has three parts (all of which can be adjusted): 
- Asking for participant ID. This helps in connecting the chatbot logs with the other data for that participant (e.g. interviews, or their answers on the website). This is needed because the chat logs are stored at the servers of chatbot platform, and thus are disconnected from any info the participants may on the website. Without this ID you could still connect the participant with the chat logs by date/time.
- The actual awe-related content of the conversation. This has the following flow:
  * An introductory message to set the scene; asking the user to go on an imaginary walk through the forest in the evening while the sun is setting, and describing some of the environment like sunlight coming through leaves and beetles flying by.
  * Further describing the scene; they are at an open field with the sun setting behind the trees in front of colourful clouds. Asking the user if they can imagine the breeze of the wind.
  * After this it goes through the different aspects of awe, focusing on a particular subscale each time (though of course they're overlapping as every subscale aspect can always be present).
 
    1 **Altered time perception**. The bot asks the user to imagine sitting down to watch a field of colorful flowers while the shadows of the trees from the sunset's light dances on the flowers. Then it asks the user how they feel while sitting down to pause and take in the view, as such scenes can make people feel captivated by the moment.
    
    2 **Self-loss**. It first asks the user to suggest a place in the forest to go to next and how the sunset looks from there. Then asks if the user feels more content and less concerned about their own struggles.
    
    3 **Connectedness**. Talks about a ray of sunshine, how it traveled from far away and is now feeding the plants that other living beings eat; it asks the user how the sunlight feels on their skin.
    
    4 **Vastness**. The bot focuses on the vastness of the sun and the clouds and how such scenes can make one feel like they're in the presence of something larger. Then asks how the user experiences the sunset from here.
    
    5 **Physiological**. It tells the user to imagine walking through bushes, watching as the sunlight dances through the branches. It asks if the user feels any bodily sensations, as seeing such beauty can cause e.g. tingling.
    
    6 **Accommodation**. It first asks the user to lie down in grass and watch the sun and clouds, and notice other critters around them. It then asks if the user is able to make sense of the experience, as such scenes can be difficult to process.
    
- Finally it runs an exit message saying: "Thanks for chatting! To finish the study, please fill in this code in the form: 33jd". This was for my own study to ensure participants finished the bot; they then had to fill in the code to be able to continue the study. Think of whether this might be useful for you as well or not.

### Customizability
Customizations can be done on request; contact me (Niels) about this. Think for instance of:
- Language, e.g. Dutch instead of English.
- Language style/register, such as (in)formality, poetic, or use of metaphors.
- Topic; it could talk about something other (awe-related) than a sunset. It could also have the user decide the topic, or select one from given options.
- Adding or removing subsections.
- Changing introduction or ending messages.

## Deployment
There are several ways possible to deploy the chatbot, depending on your needs. This section is divided by whether you're using a database or not (i.e. whether you are using HTML forms for questions).

⚠️ If you are deploying on a website, note:
To be able to access the chatbots, I (Niels) will need to whitelist your website; make sure to send me the link to your website (even if it does not contain anything useful yet) so I can give you access to the chatbots immediately.

### With a database
When using a database, Data Fundry can be used to deploy the website. Here you can upload the (static) HTML, CSS, and JS files, and setup a records data type to collect data from the form. For documentation on this, see: https://data.id.tue.nl/documentation/index. After deployment, participants can use a link to access the site on their own device.

Alternatively you could run the website locally. In this option the participants can only use your device to access the site. You need to setup a MySQL server locally and connect it with PHP to your form. Copilot can most likely help you out rather well with this.

### Without a database
If you don't need a database, i.e. you're not collecting data through HTML forms, deployment is straightfoward. You can use separate forms software if you need this, such as Microsoft Forms (please do stick to ERB appropriate software).

Either you can deploy the website through Github pages: https://pages.github.com/. Or you can use direct links to the chatbots platform (note that these pages cannot be customized). The links to each chatbot are the following:
_coming soon_

## Chatbot data collection
Please note that the website does not collect data of the chatbot conversations. This data is stored on the development platform (which I unfortunately cannot grant you access to). If you wish to access the conversations, you can request so by contacting me (Niels). For this I need to know which chatbot was used and a rough time estimate; it also helps (also for your own research) to have participants enter their participant ID so you can easily connect the chat with the participant.

## Useful related works
- White paper on psychology of awe by Summer Allen: https://ggsc.berkeley.edu/images/uploads/GGSC-JTF_White_Paper-Awe_FINAL.pdf.
- Position paper on awe in HCI: https://www.scienceopen.com/hosted-document?doi=10.14236/ewic/BCSHCI2025.18. In particular sections 2 (psychology of awe), 3 (related works), and 4 with an emphasis on 4.2 (potential HCI design methods for awe).
- Example of Awe in HCI (VR), by Miller et al.: https://dl.acm.org/doi/10.1145/3563657.3595998
- Anthropmorphic CA, representing and talking with animals, by J. Lee et al.: https://arxiv.org/html/2411.06060v1.
