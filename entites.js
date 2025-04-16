import { ComprehendClient, BatchDetectEntitiesCommand } from "@aws-sdk/client-comprehend";
const client = new ComprehendClient({region:"eu-west-2"});
const input = { // BatchDetectEntitiesRequest
    TextList: [ // CustomerInputStringList // required
      "Algeria, located in North Africa, is the largest country on the continent. Its rich history is marked by Berber, Arab, and colonial influences. The landscapes range from the Atlas Mountains to the vast expanses of the Sahara, offering unique biodiversity. Algerian culture is vibrant, featuring musical traditions like raï and various dances. Today, Algeria continues to evolve while preserving its historical and cultural heritage.",
    ],
    LanguageCode: "en" || "es" || "fr" || "de" || "it" || "pt" || "ar" || "hi" || "ja" || "ko" || "zh" || "zh-TW", // required
  };
  const command = new BatchDetectEntitiesCommand(input);
const response = await client.send(command);
const entities = response.ResultList[0].Entities;
        console.log("Entités détectées :");
        entities.forEach(entity => {
            console.log(`- Type: ${entity.Type}, Texte: ${entity.Text}, Score: ${entity.Score}`);
        });













       
        


      
        



        












  
        


















          