# Chatbots on Awe for TU/e Research Methods
This repo contains HTML and CSS example files for a website embedding chatbots on awe. Clone the repo and edit the files to your needs. HTML and CSS files contain examples of question types and layout which you can use and adjust to your liking.

A running example of this repo can be seen at: https://niels-vv.github.io/.

## Chatbots
Chatting with the chatbot is embedded into the page (see index.html) using the boostai.js file. By default there are 4 chatbots that can be used, each talking about and reflecting on everyday awe from a sunset. Each agent goes through different aspects of awe; these are derived from psychology literature on awe, see e.g. https://psycnet.apa.org/record/2018-35661-001 for the different subscales of the Awe-S scale. It addresses each subscale in 1 or 2 interactions.

The 4 variations come from a factorial combination of 2 factors: (1) Recalling a lived experience of the user vs. imagining a new scenario. For the recall variant, the agent asks the user to recall and reflect on a particularly beautiful sunset they have experienced in their lives. For the imagining variant, the agent takes the user on an imaginary walk through the forest while watching a sunset. (2) 1st vs. 2nd person perspective. For the 1st person perspective, the agent assumes the role of a butterfly and shares its own experience (either of recalling a sunset or of its experience during the awe-walk through the forest). For the 2nd person perspective it does not assume an "I".

The HTML file contains a button to open the chat. This calls the "openChat" function from boostai.js, passing a chatbot ID. The code shows how to access each variant with a different ID.

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
Please note that the website does not collect data of the chatbot conversations. This data is stored on the development platform (which I unfortunately cannot grant you access to). If you wish to access the conversations, you can request so by contacting me (Niels); I need to know which chatbot was used and a rough time estimate.
