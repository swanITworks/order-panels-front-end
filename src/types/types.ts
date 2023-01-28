import { StringMappingType } from "typescript"

  const BASELINE = "BASELINE"
  const INSIDE_VIEW = "INSIDE"

  type ResearchType = typeof BASELINE | typeof INSIDE_VIEW

  const IN_PROGRESS = "IN_PROGRESS"
  const SUBMITTED = "SUBMITTED"

  type StatusType = typeof IN_PROGRESS | typeof SUBMITTED

  type QuarterType = 1 | 2 | 3 | 4

  export type Industry = {
        eg_id: string,
        id: string,
        name: string,
        companies: string[]
  }

  export type Industries = Industry[]
  
 
  export interface ResearchTableData {
    id: string,
    company: string
    type: ResearchType
    status: StatusType
    year: number
    quarter: number
    score: number
    created: string
    user: string
    researchUniqName: string
  }

 export interface ResearchData extends ResearchTableData{
    researchModel: Dimension[],
    nestingResponses: NestingResponse[],
    mainResponses: MainResponse[]
  }

  export interface NestingQuestion { id:string, eg_id: string, heading: string, description: string | null, dependent_generic_questions: string[] }

  export interface NestingResponse { eg_id:string, response:"YES" | "NO" | "DON'T_KNOW", evidence: EvidenceInResponse[] }

  export interface EvidenceInLibrary { id: string, fileName: string | null, url: string | null, title: string, overallComment: string, relatedToAnwers: string[] }

  export interface EvidenceInResponse extends EvidenceInLibrary { comment: string }

  export interface GenericQuestion { id: string, eg_id: string, heading: string, positive_response_statement: string, description: null | string, external_hint: null | string, metric: boolean, open: boolean, open_long: boolean, is_evidence_required: boolean, sub_gqs: [] }

  export interface Topic { id: string, name: string, description: number | null, research_dimension: string, order_in_research_dimension: number, questions: Question[]}

  export interface Dimension { id: string, name: string, description: null | string, weightage: number, model:string, order_in_model: number, topics: Topic[] }

  export interface Question { id: string, weightage: number, topic: string, order_in_topic: number, age_group: string, impact: number, materiality: number, generic_question: GenericQuestion}

  export interface MainResponse { eg_id:string, response:"YES" | "NO" | "DON'T_KNOW", evidence: EvidenceInResponse[] }


  

  