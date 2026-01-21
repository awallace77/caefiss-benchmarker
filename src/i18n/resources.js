export const resources = {
  en: {
    translation: {
      general: {
        titleAbbr: "CAEFISS",
        title:
          "Canadian Adverse Events Following Immunization Surveillance System",
        subtitle: "Development Benchmarker",
        desc: "Upload your audit log JSON file and generate your choice of visual metrics.",
        fileInputLabel: "Choose file",
        addFileLabel: "Upload",
        fileInputPlaceholder: "Choose file ...",
        fileUpload: "Uploading file",
        fileUploadError: "Error uploading file",
        switchLocale: "Français",
      },

      generatorTypes: {
        storyPoints: "Story Point Benchmarks",
        storyPointsDesc:
          "Generate a chart that shows your development performance based on estimated story points and their expected benchmark.",
        storyPointsImgAlt: "Graph based on story points",
        storyPointsImgName: "story_points_benchmarks",
      },

      success: {
        upload: "Successfully uploaded file",
        generated: "Successfully generated image",
        download: "Successfully downloaded image",
      },

      warning: {
        fileType: "Incorrect file type, please use a JSON file",
      },

      errors: {
        upload: "There was an error uploading the file",
        generated: "There was an error generating the image",
        download: "There was an error downloading the image",
        noFile: "No file provided",
        error: "Something went wrong",
      },

      info: {
        upload: "Uploading file",
        generated: "Generating image",
        download: "Downloading image",
      },

      actions: {
        generateImage: "Generate Image",
        downloadImage: "Download Image",
      },
    },
  },
  fr: {
    translation: {
      general: {
        titleAbbr: "SCSESSI",
        title:
          "Système canadien de surveillance des effets secondaires suivant l'immunisation",
        subtitle: "Outil de benchmarking de développement",
        desc: "Téléversez votre fichier JSON de journal d'audit et générez les indicateurs visuels de votre choix.",
        fileInputLabel: "Choisir un fichier",
        addFileLabel: "Téléverser",
        fileInputPlaceholder: "Choisir un fichier ...",
        fileUpload: "Téléversement du fichier",
        fileUploadError: "Erreur lors du téléversement du fichier",
        switchLocale: "English",
      },

      generatorTypes: {
        storyPoints: "Indicateurs de points d'histoire",
        storyPointsDesc:
          "Générer un graphique illustrant votre performance de développement en fonction des points d'histoire estimés et de leurs seuils de référence attendus.",
        storyPointsImgAlt: "Graphique basé sur les points d'histoire",
        storyPointsImgName: "indicateurs_points_histoire",
      },

      success: {
        upload: "Fichier téléversé avec succès",
        generated: "Image générée avec succès",
        download: "Image téléchargée avec succès",
      },

      warning: {
        fileType:
          "Type de fichier incorrect, veuillez utiliser un fichier JSON",
      },

      errors: {
        upload: "Une erreur est survenue lors du téléversement du fichier",
        generated: "Une erreur est survenue lors de la génération de l'image",
        download: "Une erreur est survenue lors du téléchargement de l'image",
        noFile: "Aucun fichier fourni",
        error: "Une erreur est survenue",
      },

      info: {
        upload: "Téléversement du fichier",
        generated: "Génération de l'image",
        download: "Téléchargement de l'image",
      },

      actions: {
        generateImage: "Générer l'image",
        downloadImage: "Télécharger l'image",
      },
    },
  },
};
