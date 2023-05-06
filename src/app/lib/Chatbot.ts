import dotenv from 'dotenv';
import Pinecone from 'pinecone';
import { OpenAI } from "langchain/llms/openai";

dotenv.config();

export class Chatbot {
  private static pineconeInstance = new Pinecone(process.env.PINECONE_API_KEY);
  private static openaiInstance = new OpenAI(process.env.OPENAI_API_KEY);

  public static async getAnswer(query: string): Promise<string> {
    try {
      // Your existing code

      // Fetch contextualized data
      const contextualData = await this.pineconeInstance.fetchContextualData(
        process.env.PINECONE_ENVIRONMENT,
        process.env.PINECONE_INDEX_NAME,
        query,
      );

      // Your existing code
    } catch (error) {
      console.error(error);
      return 'An error occurred while processing your query.';
    }
    // Add a default return statement
    return 'An unexpected error occurred.';
  }
}

  