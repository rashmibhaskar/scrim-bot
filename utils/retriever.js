import { SupabaseVectorStore } from 'langchain/vectorstores/supabase'
import { OpenAIEmbeddings } from 'langchain/embeddings/openai'
import { createClient } from '@supabase/supabase-js'

const openAIApiKey = "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"

const embeddings = new OpenAIEmbeddings({ openAIApiKey })
const sbApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFka3NxZWJteXN4dmt6cWZoYWJwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTA5OTcyODQsImV4cCI6MjAyNjU3MzI4NH0.zYm_XohdhU59b9B69xTsf6hsv10yW42e6E7wX7yI2uw"
const sbUrl = "https://qdksqebmysxvkzqfhabp.supabase.co"
const client = createClient(sbUrl, sbApiKey)

const vectorStore = new SupabaseVectorStore(embeddings, {
    client,
    tableName: 'documents',
    queryName: 'match_documents'
})

const retriever = vectorStore.asRetriever()

export { retriever }