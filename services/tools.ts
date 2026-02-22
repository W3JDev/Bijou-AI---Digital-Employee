import { FunctionDeclaration, Type } from "@google/genai";

export const ToolOrchestrator = {
  sendEmail: async (recipient: string, subject: string, body: string) => {
    console.log(`[ToolOrchestrator] Sending Email...`);
    console.log(`To: ${recipient}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    console.log(`[ToolOrchestrator] Email sent successfully.`);
    return { success: true, message: `Email sent to ${recipient}` };
  }
};

export const emailToolDeclaration: FunctionDeclaration = {
  name: 'sendEmail',
  description: 'Sends an email to a recipient with a subject and body.',
  parameters: {
    type: Type.OBJECT,
    properties: {
      recipient: {
        type: Type.STRING,
        description: 'The email address of the recipient.',
      },
      subject: {
        type: Type.STRING,
        description: 'The subject of the email.',
      },
      body: {
        type: Type.STRING,
        description: 'The body content of the email.',
      },
    },
    required: ['recipient', 'subject', 'body'],
  },
};
