export interface MentionPluginTheme {
  mention?: string;
  mentionSuggestions?: string;
  mentionSuggestionsPopup?: string;
  mentionSuggestionsPopupVisible?: string;
  mentionSuggestionsEntry?: string;
  mentionSuggestionsEntryFocused?: string;
  mentionSuggestionsEntryText?: string;
  mentionSuggestionsEntryAvatar?: string;
  [x: string]: string | undefined;
}
export declare const defaultTheme: MentionPluginTheme;
