export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      community_comments: {
        Row: {
          created_at: string
          display_name: string
          id: string
          member_label: string | null
          message: string
          moderation_note: string | null
          parent_id: string | null
          post_id: string
          status: string
        }
        Insert: {
          created_at?: string
          display_name?: string
          id?: string
          member_label?: string | null
          message: string
          moderation_note?: string | null
          parent_id?: string | null
          post_id: string
          status?: string
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          member_label?: string | null
          message?: string
          moderation_note?: string | null
          parent_id?: string | null
          post_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "community_comment_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "community_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_public_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_media: {
        Row: {
          created_at: string
          id: string
          image_path: string
          moderation_note: string | null
          position: number
          post_id: string
          status: string
        }
        Insert: {
          created_at?: string
          id?: string
          image_path: string
          moderation_note?: string | null
          position?: number
          post_id: string
          status?: string
        }
        Update: {
          created_at?: string
          id?: string
          image_path?: string
          moderation_note?: string | null
          position?: number
          post_id?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_public_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_posts: {
        Row: {
          created_at: string
          display_name: string
          id: string
          image_path: string | null
          image_status: string
          member_label: string | null
          message: string
          moderation_note: string | null
          status: string
          title: string
          video_status: string
          video_url: string | null
        }
        Insert: {
          created_at?: string
          display_name?: string
          id?: string
          image_path?: string | null
          image_status?: string
          member_label?: string | null
          message: string
          moderation_note?: string | null
          status?: string
          title?: string
          video_status?: string
          video_url?: string | null
        }
        Update: {
          created_at?: string
          display_name?: string
          id?: string
          image_path?: string | null
          image_status?: string
          member_label?: string | null
          message?: string
          moderation_note?: string | null
          status?: string
          title?: string
          video_status?: string
          video_url?: string | null
        }
        Relationships: []
      }
      community_reports: {
        Row: {
          comment_id: string | null
          created_at: string
          details: string
          id: string
          media_id: string | null
          post_id: string
          reason: string
          status: string
          target_type: string
        }
        Insert: {
          comment_id?: string | null
          created_at?: string
          details?: string
          id?: string
          media_id?: string | null
          post_id: string
          reason: string
          status?: string
          target_type?: string
        }
        Update: {
          comment_id?: string | null
          created_at?: string
          details?: string
          id?: string
          media_id?: string | null
          post_id?: string
          reason?: string
          status?: string
          target_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_report_comment_fk"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "community_comment_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_report_comment_fk"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "community_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_report_media_fk"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "community_media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_report_media_fk"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "community_media_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_report_media_fk"
            columns: ["media_id"]
            isOneToOne: false
            referencedRelation: "community_public_media"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_reports_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_reports_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_reports_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_public_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      research_alert_outbox: {
        Row: {
          change_summary: string
          created_at: string
          id: string
          sent_at: string | null
          study_id: string
        }
        Insert: {
          change_summary: string
          created_at?: string
          id?: string
          sent_at?: string | null
          study_id: string
        }
        Update: {
          change_summary?: string
          created_at?: string
          id?: string
          sent_at?: string | null
          study_id?: string
        }
        Relationships: []
      }
      research_alert_subscriptions: {
        Row: {
          confirm_token: string
          confirmed_at: string | null
          consent_at: string
          consent_text: string
          created_at: string
          email: string
          id: string
          status: string
          unsubscribe_token: string
          unsubscribed_at: string | null
        }
        Insert: {
          confirm_token?: string
          confirmed_at?: string | null
          consent_at?: string
          consent_text: string
          created_at?: string
          email: string
          id?: string
          status?: string
          unsubscribe_token?: string
          unsubscribed_at?: string | null
        }
        Update: {
          confirm_token?: string
          confirmed_at?: string | null
          consent_at?: string
          consent_text?: string
          created_at?: string
          email?: string
          id?: string
          status?: string
          unsubscribe_token?: string
          unsubscribed_at?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      community_comment_moderation_queue: {
        Row: {
          created_at: string | null
          display_name: string | null
          id: string | null
          member_label: string | null
          message: string | null
          moderation_note: string | null
          parent_id: string | null
          post_id: string | null
          queue_status: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          member_label?: string | null
          message?: string | null
          moderation_note?: string | null
          parent_id?: string | null
          post_id?: string | null
          queue_status?: never
          status?: string | null
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          member_label?: string | null
          message?: string | null
          moderation_note?: string | null
          parent_id?: string | null
          post_id?: string | null
          queue_status?: never
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "community_comment_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "community_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_public_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_media_moderation_queue: {
        Row: {
          created_at: string | null
          id: string | null
          image_path: string | null
          moderation_note: string | null
          position: number | null
          post_id: string | null
          queue_status: string | null
          status: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string | null
          image_path?: string | null
          moderation_note?: string | null
          position?: number | null
          post_id?: string | null
          queue_status?: never
          status?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string | null
          image_path?: string | null
          moderation_note?: string | null
          position?: number | null
          post_id?: string | null
          queue_status?: never
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_public_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_moderation_queue: {
        Row: {
          created_at: string | null
          display_name: string | null
          id: string | null
          image_path: string | null
          image_status: string | null
          member_label: string | null
          message: string | null
          moderation_note: string | null
          queue_status: string | null
          status: string | null
          video_status: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          image_path?: string | null
          image_status?: string | null
          member_label?: string | null
          message?: string | null
          moderation_note?: string | null
          queue_status?: never
          status?: string | null
          video_status?: string | null
          video_url?: string | null
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          image_path?: string | null
          image_status?: string | null
          member_label?: string | null
          message?: string | null
          moderation_note?: string | null
          queue_status?: never
          status?: string | null
          video_status?: string | null
          video_url?: string | null
        }
        Relationships: []
      }
      community_public_comments: {
        Row: {
          created_at: string | null
          depth: number | null
          display_name: string | null
          id: string | null
          member_label: string | null
          message: string | null
          parent_id: string | null
          post_id: string | null
        }
        Relationships: []
      }
      community_public_media: {
        Row: {
          id: string | null
          position: number | null
          post_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_moderation_queue"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_media_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "community_public_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_public_posts: {
        Row: {
          created_at: string | null
          display_name: string | null
          id: string | null
          image_path: string | null
          image_status: string | null
          member_label: string | null
          message: string | null
          title: string | null
          video_status: string | null
          video_url: string | null
        }
        Insert: {
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          image_path?: string | null
          image_status?: string | null
          member_label?: string | null
          message?: string | null
          title?: string | null
          video_status?: never
          video_url?: never
        }
        Update: {
          created_at?: string | null
          display_name?: string | null
          id?: string | null
          image_path?: string | null
          image_status?: string | null
          member_label?: string | null
          message?: string | null
          title?: string | null
          video_status?: never
          video_url?: never
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const

