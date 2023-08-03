// Function to get the participant name from the URL query string
function getParticipantNameFromURL() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get("name");
  }

  
  // Function to find the participant details by name
  function findParticipantByName(name) {
    // Data for participants (same as in script.js)
    const participants = [
      {
        name: "Household #1",
        programDates: "1/1/23 - 3/30/23",
        incomeAtEntry: 0,
        incomeAtExit: 12000,
        comments: "Three men recently arrived in the United States and entered a program to find housing. They seemed mentally drained and desperate so we offered a 2-night hotel stay while efforts were made to find stable housing. The program partnered with MHS for rent support up to $1,400 if they found housing in Seattle, but the clients preferred to stay in Kent due to their support network of friends in the area. The clients had been apartment shopping but faced challenges with documentation and co-signers. Through Housing Connector, a suitable 2-bedroom apartment in Kent was found for $1,950. Upon choosing the apartment, the necessary applications would be filed. The clients were very happy and grateful for the help, relieved to finally secure a place to live. Job opportunities were provided, and one of the men secured a job at Seatac Airport, while the other two were still looking for employment."
      },
        {
          name: "Household #2",
          programDates: "1/1/2023 - 4/30/2023",
          incomeAtEntry: 2000,
          incomeAtExit: 3500,
          comments: "A family of five immigrated to the USA in June 2022. Despite the income, the family was struggling to make ends meet due to debt incurred from purchasing a car. This debt made it difficult for them to cover their expenses, even with the income and food stamp assistance. With the help of this program, members of the family was able to secure a job with good payment, settle their debt, enroll in English classes, and secure a better job."
        },
        {
          name: "Household #3",
          programDates: "1/1/23 - 3/30/23",
          incomeAtEntry: 2200,
          incomeAtExit: 2200,
          comments: "The wife has a finance background and was looking for a job, while her husband was employed at Hilton Hotel. However, their income was not sufficient to meet all their expenses. As they don't have a car, they rely on using the bus to commute to work. However, the family moved to California and was unable to complete the program."
        },
        {
          name: "Household #4",
          programDates: "2/1/2023 - 4/30/2023",
          incomeAtEntry: 2300,
          incomeAtExit: 4700,
          comments: "Due to the program's support, two woman living together were able to make significant changes in their lives. One of them purchased a car, which made it easier for her to find a job and secure a new apartment near her workplace. The other, who previously had no income, now earns $19 per hour and also bought her own car. As a result, they both decided to move out of their current apartment and live separately. In a later update, one of the women was able to obtain her driving license after completing a driving class and is actively searching for a car to enhance her stability. The other also secured a job and is earning $19 per hour, with plans to buy a car. Previously, before entering the program, one of the women was jobless due to health reasons, as her previous job was in a refrigerator room. While the other was working in a hotel, but without a car, she faced difficulties in maintaining flexible working hours and often had to stay in a hotel room after finishing late-night shifts."
        },
        {
          name: "Household #5",
          programDates: "1/1/23 - 6/30/23",
          incomeAtEntry: 250,
          incomeAtExit: 4000,
          comments: "The client arrived in the USA alone from Afghanistan in June 2022, with the Lutheran agency providing assistance for two months' rent but stopped thereafter. In July, she stayed with a host family, and the resettlement agency will covered her until the end of October. However, she needed help with rent for November. She has applied for a green card, expected to arrive in about four months, making it difficult for her to secure a job as most places require a Social Security number. In the meantime, our program was able to refer her to resources for job opportunities, a discount bus pass, and hygiene assistance. She recently got a job at Amazon's warehouse, earning approximately $600 per week, and receives $250 in food stamps. She is currently living alone and wants to find a roommate to share rent and save up for a car purchase. Before joining the program, she had a job, but the long commute without reliable transportation led her to quit. Fortunately, with the support of the community and this program, she now has a job and a car. "
        },
        {
          name: "Household #6",
          programDates: "2/1/2023 - 4/30/2023",
          incomeAtEntry: 3000,
          incomeAtExit: 6000,
          comments: "The family consists of six members, with the father left behind in Afghanistan. The mother and one of the daughters are the only ones working in the family. They face numerous challenges related to rent and commuting since they don't have a car. The high rent has forced the daughter to discontinue her studies. Despite their earnings, they struggle to cover their expenses, with the rent increasing from $2400 to $2500 starting in January 2023. They receive $800 in food assistance but no cash. The mother works part-time at $15 per hour, and the daughter works full-time, but commuting during winter, especially in rainy or snowy conditions, is problematic. The program has assisted them in avoiding eviction."
        },
        {
          name: "Household #7",
          programDates: "5/1/23 - 7/30/23",
          incomeAtEntry: 2400,
          incomeAtExit: 5200,
          comments: "A family of four immigrated to the USA in 2021. The husband was battling cancer and unable to work, leaving the wife as the sole wage earner. Their daughter completed ESL classes and was actively seeking employment. Despite the challenges, she remained positive and motivated, having previously worked as a teacher in Afghanistan. Tragically, shortly after joining the program, the husband passed away on May 10, 2023. Despite this loss, the family persevered, and we assisted the daughter in submitting her resume to DoubleTree. Thanks to our support, she secured a job at DoubleTree and achieved financial stability."
        },
        {
          name: "Household #8",
          programDates: "5/1/2023 - 7/30/2023",
          incomeAtEntry: 888,
          incomeAtExit: 4000,
          comments: "The client, arrived in the USA in February 2022 with a household of five members. His English proficiency is weak, and he had to leave his previous job due to back pain caused by the challenging nature of the work. He pays a monthly rent of $1625 and receives $1100 in food assistance but not in cash. He applied for cash assistance but faced difficulty obtaining the required Stop work paper from his former employer. While waiting for a reply regarding a security job in Seattle, he sought rental assistance for February, which MCRC was able to provide, preventing eviction. He reached out again, seeking rental assistance, as he had enrolled in a Track Driving class with a $4000 fee, of which he could only pay $2000. The class duration was one month, and upon completion, he would be eligible to work as a Track driver. He had left his job at Amazon, and currently, his income was zero, relying only on the $888 DSHS cash assistance so he needed money to cover some expenses while enrolled in the class. Our organization was able to assist with the class fee/rental assistance, enabling him to become a truck driver and successfully secure a good stream of income."
        },
        {
          name: "Household #9",
          programDates: "5/1/2023 - 7/30/2023",
          incomeAtEntry: 1156,
          incomeAtExit: 3500,
          comments: "The client initially entered the program unemployed, with a household size of six. It was challenging to meet rent payments while attending an IT class and actively seeking employment. As he faced difficulties keeping up with rent, we stepped in to provide assistance, and through our support, he successfully secured a job at a bank."
        },
        {
          name: "Household #10",
          programDates: "5/1/2023 - Active",
          incomeAtEntry: 2000,
          incomeAtExit: 2000,
          comments: "The client's household size is four, and he is currently unemployed. Presently, he is doing deliveries in his car while actively searching for a job. His family recently moved from Ohio, and his English proficiency is excellent. Previously, he worked in Maintenance Service in Afghanistan. As of now, he has applied for a security position that he hopes to secure."
        },
        {
          name: "Household #11",
          programDates: "6/1/23 - Active",
          incomeAtEntry: 1300,
          incomeAtExit: 1300,
          comments: "In August 2021, Reza and his family immigrated to the USA. Upon arriving, he enrolled in IT classes, including Security, Network, and CCNA. Recently, he managed to secure a part-time job with YWCA, earning $15 per hour. However, this income alone is insufficient to cover the monthly rent of $1420 and other family expenses. Reza's household consists of three members, and they are receiving $474 in food assistance. Despite these supports, he still needed housing assistance at which we were able to help him. "
        },
        {
          name: "Household #12",
          programDates: "6/1/2023 - Active",
          incomeAtEntry: 280,
          incomeAtExit: 280,
          comments: "Women who immigrated from Afghanistan alone, she has a good experience in regards to Data Entry and Administration. Right now she is jobless and looking for job. She appeared for an interview and is waiting for an employer response."
        },
        {
          name: "Household #13",
          programDates: "2/1/2023 - Active",
          incomeAtEntry: 771,
          incomeAtExit: 771,
          comments: "She came to the US at the end of 2022 though the Mexican border and is undocumented. The household size is four and they are having a very hard time finding housing and jobs due to them being undocumented."
        },
        {
          name: "Household #14",
          programDates: "3/1/2023 - 3/30/2023",
          incomeAtEntry: 2200,
          incomeAtExit: 3300,
          comments: "Recently, he started a new job but is struggling to pay his rent. Seeking assistance, he approached a resettlement agency, but the decision is still pending. Currently, he works 32 hours per week, earning $21 per hour, supporting a household of four members. While he receives food benefits of $1100, his rent amounts to $1800, creating a financial strain. Under our Program, I had a conversation with the client to help him manage his debts. He made a significant purchase of a 2004 Toyota Corolla for $2500 and has committed to pay $600 monthly to the seller. In the meantime, he has joined college for the summer quarter and is actively evaluating his degree options, with aspirations to pursue his doctorate Program. During our support, he achieved a pharmacy assistant license, resulting in an income ranging from $2,200 to $3,300. His goal is to handle his taxes efficiently and begin his career in the pharmaceutical field."
        },
        {
          name: "Household #15",
          programDates: "6/20/2023 - 7/30/2023",
          incomeAtEntry: 280,
          incomeAtExit: 3000,
          comments: "A single women who has faced challenging situations after sustaining an injury at work, leaving her unable to continue her job. As a result, she fell behind on her rent and received back-to-back eviction notices. Her financial situation became dire, and she struggled to meet her rental obligations, accumulating a debt of $8000 to her landlord. Fortunately, with the combined efforts of MCRC (and other contributing organizations), they were able to prevent her from being evicted. Additionally, she received assistance in securing a job, providing her with a stable source of income to help improve her circumstances."
        },
        {
          name: "Household #16",
          programDates: "8/1/2023 - Active",
          incomeAtEntry: 2200,
          incomeAtExit: 3300,
          comments: "This household of 5 was referred by YWCA. This family are new refugees and came to the USA in 2022 at which they got settled in Atlanta (Georgia). Recently, they moved to Washington state. Both the husband and wife have a degree in software Engineer and are unemployed looking for jobs. They currently have an income of zero and are requesting rental assistance. "
        },
        {
          name: "Household #17",
          programDates: "8/1/2023 - Active",
          incomeAtEntry: 880,
          incomeAtExit: 880,
          comments: "This client is unemployed with a household of five members. His wife just gave birth to a child, and he applied for Family Medical Leave, which got approved. Unfortunately, while he was on leave, the company made the decision to lay him off. As a result, he fell behind on rent and received an eviction notice in April. His monthly rent amounts to $1,955. Prior to coming to this country, he worked as a surgeon in Afghanistan and obtained the necessary certification to practice as a surgeon assistant here. However, he is having a hard time securing a job and requesting rental assistance. "
        },
        {
          name: "Household #18",
          programDates: "8/1/2023 - Active",
          incomeAtEntry: 2000,
          incomeAtExit: 2000,
          comments: "This client is currently unemployed, living in a household of five members. His wife recently gave birth to a child, and he applied for Family Medical Leave, which was approved. Unfortunately, during his leave, the company made the decision to lay him off. Consequently, he fell behind on rent and received an eviction notice in April. His monthly rent amounts to $1,955. Before coming to this country, he worked as a surgeon in Afghanistan and obtained the necessary certification to practice as a surgical assistant here. However, he is facing difficulties in securing a job and is now requesting rental assistance."
        },
        {
          name: "Household #19",
          programDates: "8/1/2023 - Active",
          incomeAtEntry: 888,
          incomeAtExit: 888,
          comments: "This client arrived in the USA in March 2023 and currently lives with a household of five members. The JFS agency has been supporting this family for three months, and that support is set to end on the 31st of June. As a result, he has requested rental assistance for the upcoming months. In Afghanistan, he worked in the Ministry of Energy, Water, and Electricity as an Engineer and possesses fluency in English. Despite his qualifications, he is facing challenges in finding employment in the USA. "
        },
        {
          name: "Household #20",
          programDates: "8/1/2023 - Active",
          incomeAtEntry: 281,
          incomeAtExit: 281,
          comments: "This client is seeking rental assistance and they are proficient in English. Currently, she is actively looking for employment while receiving food SNAP and cash assistance. Her monthly income stands at $450."
        },
        
      ];
      
  
    return participants.find(participant => participant.name === name);
  }
  
  // Function to display participant details on the page
  function displayParticipantDetails() {
    const participantName = getParticipantNameFromURL();
    const participant = findParticipantByName(decodeURIComponent(participantName));
  
    if (!participant) {
      // Participant not found, display an error message or redirect to the main page.
      // For simplicity, let's display an error message here.
      const participantDetailsSection = document.querySelector(".participant-details");
      participantDetailsSection.innerHTML = "<p>Participant not found.</p>";
      return;
    }
    
  
    // Participant found, display the details on the page.
    const participantDetailsSection = document.querySelector(".participant-details");
    const participantDetailsHTML = `
      <h2>${participant.name}</h2>
      <div class="begin">
      <div class="part">
      <h3>Program Dates:</h3>
      <p>${participant.programDates}</p>
      </div>
      <div class="part">
      <h3>Income at Entry:</h3>
      <p>${participant.incomeAtEntry}</p>
      </div>
      <div class="part">
      <h3>Income at Exit: </h3>
      <p>${participant.incomeAtExit}</p>
      </div>
      </div>
      <h3>About:</h3>
      <p>${participant.comments}</p>
    `; 

  
    participantDetailsSection.innerHTML = participantDetailsHTML;
  }
  
  // Call function to display participant details when the page loads
  displayParticipantDetails();
  