import { z } from 'zod'

const MessageSchemaDef = z.object({
    id: z.string(),
    room: z.number(),
    author: z.string(),
    x: z.number(),
    y: z.number(),
})

type Translate = z.infer<typeof MessageSchemaDef>;
export default Translate
