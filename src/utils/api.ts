interface ChatRequest {
  message: string;
  session_id: string;
}

interface ChatResponse {
  response: string;
  session_id: string;
}

const API_BASE_URL = import.meta.env.VITE_AI_ASSISTANT_API_URL || 'http://localhost:8000';

export async function sendChatMessage(message: string, sessionId: string): Promise<ChatResponse> {
  const response = await fetch(`${API_BASE_URL}/chat`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      message,
      session_id: sessionId,
    } as ChatRequest),
  });

  if (!response.ok) {
    throw new Error(`Failed to send message: ${response.statusText}`);
  }

  return response.json();
}
