// Estrutura de dados mock para simulados com perguntas e alternativas
export const simuladosPerguntasMock: Record<string, {
  id: string;
  nome: string;
  tempo: number; // em minutos
  perguntas: Array<{
    enunciado: string;
    alternativas: string[];
    correta: number; // índice da alternativa correta
  }>;
}> = {
  "aws-practitioner": {
    id: "aws-practitioner",
    nome: "AWS Certified Cloud Practitioner",
    tempo: 60,
    perguntas: [
      {
        enunciado: "O que é a AWS?",
        alternativas: ["Um sistema operacional", "Um provedor de nuvem", "Um banco de dados", "Um navegador web"],
        correta: 1
      },
      {
        enunciado: "Qual serviço AWS é usado para armazenar objetos?",
        alternativas: ["EC2", "Lambda", "S3", "RDS"],
        correta: 2
      }
    ]
  },
  "enem-2024": {
    id: "enem-2024",
    nome: "ENEM 2024",
    tempo: 90,
    perguntas: [
      {
        enunciado: "Qual é a fórmula da água?",
        alternativas: ["CO2", "H2O", "O2", "NaCl"],
        correta: 1
      },
      {
        enunciado: "Quem foi o primeiro presidente do Brasil?",
        alternativas: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Dom Pedro II"],
        correta: 2
      }
    ]
  },
  "aws-developer": {
    id: "aws-developer",
    nome: "AWS Certified Developer Associate",
    tempo: 130,
    perguntas: [
      {
        enunciado: "Qual serviço AWS é mais indicado para executar código sem gerenciar servidores?",
        alternativas: ["EC2", "Lambda", "ECS", "Elastic Beanstalk"],
        correta: 1
      },
      {
        enunciado: "O que o IAM permite gerenciar na AWS?",
        alternativas: ["Redes Virtuais", "Identidades e permissões", "Armazenamento de objetos", "Recursos de computação"],
        correta: 1
      }
    ]
  },
  "aws-solutions": {
    id: "aws-solutions",
    nome: "AWS Solutions Architect Associate",
    tempo: 130,
    perguntas: [
      {
        enunciado: "Qual serviço AWS é recomendado para balanceamento de carga?",
        alternativas: ["S3", "EC2", "ELB", "RDS"],
        correta: 2
      },
      {
        enunciado: "O que caracteriza uma VPC na AWS?",
        alternativas: ["Rede virtual isolada", "Banco de dados relacional", "Serviço de mensagens", "Gerenciamento de identidades"],
        correta: 0
      }
    ]
  },
  "azure-fundamentals": {
    id: "azure-fundamentals",
    nome: "Microsoft Azure Fundamentals (AZ-900)",
    tempo: 85,
    perguntas: [
      {
        enunciado: "O que é o Azure?",
        alternativas: ["Sistema operacional", "Provedor de nuvem", "Banco de dados", "Editor de texto"],
        correta: 1
      },
      {
        enunciado: "Qual serviço Azure é usado para hospedar máquinas virtuais?",
        alternativas: ["Azure Functions", "Azure Virtual Machines", "Azure Blob Storage", "Azure SQL"],
        correta: 1
      }
    ]
  },
  "azure-administrator": {
    id: "azure-administrator",
    nome: "Azure Administrator Associate (AZ-104)",
    tempo: 120,
    perguntas: [
      {
        enunciado: "Qual recurso é usado para controlar o acesso a recursos no Azure?",
        alternativas: ["Resource Group", "Role-Based Access Control", "Virtual Network", "App Service"],
        correta: 1
      },
      {
        enunciado: "O que é Azure Active Directory?",
        alternativas: ["Serviço de identidade", "Banco de dados", "Serviço de armazenamento", "Ferramenta de monitoramento"],
        correta: 0
      }
    ]
  },
  "gcp-associate": {
    id: "gcp-associate",
    nome: "Google Associate Cloud Engineer",
    tempo: 120,
    perguntas: [
      {
        enunciado: "Qual serviço GCP é usado para armazenar objetos?",
        alternativas: ["Cloud SQL", "Cloud Storage", "Compute Engine", "BigQuery"],
        correta: 1
      },
      {
        enunciado: "O que é o Google Kubernetes Engine?",
        alternativas: ["Serviço de banco de dados", "Serviço de orquestração de containers", "Serviço de mensagens", "Serviço de identidade"],
        correta: 1
      }
    ]
  },
  "gcp-professional": {
    id: "gcp-professional",
    nome: "Google Professional Cloud Architect",
    tempo: 120,
    perguntas: [
      {
        enunciado: "Qual serviço GCP é recomendado para análise de grandes volumes de dados?",
        alternativas: ["Cloud Functions", "BigQuery", "App Engine", "Cloud Run"],
        correta: 1
      },
      {
        enunciado: "O que caracteriza o Cloud Spanner?",
        alternativas: ["Banco de dados relacional global", "Serviço de armazenamento de objetos", "Serviço de monitoramento", "Serviço de rede"],
        correta: 0
      }
    ]
  },
  "comptia-a-plus": {
    id: "comptia-a-plus",
    nome: "CompTIA A+",
    tempo: 90,
    perguntas: [
      {
        enunciado: "Qual componente é responsável pelo processamento central em um computador?",
        alternativas: ["HD", "RAM", "CPU", "Fonte de alimentação"],
        correta: 2
      },
      {
        enunciado: "O que é BIOS?",
        alternativas: ["Sistema operacional", "Firmware de inicialização", "Aplicativo de escritório", "Placa de vídeo"],
        correta: 1
      }
    ]
  },
  "comptia-security-plus": {
    id: "comptia-security-plus",
    nome: "CompTIA Security+",
    tempo: 90,
    perguntas: [
      {
        enunciado: "O que é autenticação multifator?",
        alternativas: ["Uso de duas ou mais formas de autenticação", "Acesso sem senha", "Apenas biometria", "Apenas senha"],
        correta: 0
      },
      {
        enunciado: "Qual é o objetivo do firewall?",
        alternativas: ["Aumentar a velocidade da internet", "Proteger a rede contra acessos não autorizados", "Gerenciar impressoras", "Armazenar arquivos"],
        correta: 1
      }
    ]
  },
  "lpi-essentials": {
    id: "lpi-essentials",
    nome: "LPI Linux Essentials",
    tempo: 60,
    perguntas: [
      {
        enunciado: "O que é o Linux?",
        alternativas: ["Sistema operacional", "Editor de texto", "Navegador web", "Planilha eletrônica"],
        correta: 0
      },
      {
        enunciado: "Qual comando exibe o diretório atual no Linux?",
        alternativas: ["ls", "cd", "pwd", "mkdir"],
        correta: 2
      }
    ]
  },
  "lpi-1": {
    id: "lpi-1",
    nome: "LPI LPIC-1",
    tempo: 90,
    perguntas: [
      {
        enunciado: "Qual comando é usado para listar arquivos em um diretório no Linux?",
        alternativas: ["ls", "cd", "rm", "touch"],
        correta: 0
      },
      {
        enunciado: "O que faz o comando 'chmod'?",
        alternativas: ["Altera permissões de arquivos", "Move arquivos", "Copia arquivos", "Exclui arquivos"],
        correta: 0
      }
    ]
  }
};
    ]
  },
  "aws-solutions": {
    id: "aws-solutions",
    nome: "AWS Solutions Architect Associate",
    tempo: 130,
    perguntas: [
      }
    ]
  },
        correta: 2
      }
    ]
  },
        alternativas: ["Rede virtual isolada", "Banco de dados relacional", "Serviço de mensagens", "Gerenciamento de identidades"],
        correta: 0
      }
    ]
  },
  "azure-fundamentals": {
    id: "azure-fundamentals",
    nome: "Microsoft Azure Fundamentals (AZ-900)",
    tempo: 85,
    perguntas: [
      }
    ]
  }
      },
      {
        enunciado: "Qual serviço Azure é usado para hospedar máquinas virtuais?",
        alternativas: ["Azure Functions", "Azure Virtual Machines", "Azure Blob Storage", "Azure SQL"],
        correta: 1
      }
    ]
  },
  "azure-administrator": {
    id: "azure-administrator",
    nome: "Azure Administrator Associate (AZ-104)",
    tempo: 120,
    perguntas: [
      {
        enunciado: "Qual recurso é usado para controlar o acesso a recursos no Azure?",
        alternativas: ["Resource Group", "Role-Based Access Control", "Virtual Network", "App Service"],
        correta: 1
      },
      {
        enunciado: "O que é Azure Active Directory?",
        alternativas: ["Serviço de identidade", "Banco de dados", "Serviço de armazenamento", "Ferramenta de monitoramento"],
        correta: 0
      }
    ]
  },
  "gcp-associate": {
    id: "gcp-associate",
    nome: "Google Associate Cloud Engineer",
    tempo: 120,
    perguntas: [
      {
        enunciado: "Qual serviço GCP é usado para armazenar objetos?",
        alternativas: ["Cloud SQL", "Cloud Storage", "Compute Engine", "BigQuery"],
        correta: 1
      },
      {
        enunciado: "O que é o Google Kubernetes Engine?",
        alternativas: ["Serviço de banco de dados", "Serviço de orquestração de containers", "Serviço de mensagens", "Serviço de identidade"],
        correta: 1
      }
    ]
  },
  "gcp-professional": {
    id: "gcp-professional",
    nome: "Google Professional Cloud Architect",
    tempo: 120,
    perguntas: [
      {
        enunciado: "Qual serviço GCP é recomendado para análise de grandes volumes de dados?",
        alternativas: ["Cloud Functions", "BigQuery", "App Engine", "Cloud Run"],
        correta: 1
      },
      {
        enunciado: "O que caracteriza o Cloud Spanner?",
        alternativas: ["Banco de dados relacional global", "Serviço de armazenamento de objetos", "Serviço de monitoramento", "Serviço de rede"],
        correta: 0
      }
    ]
  },
  "comptia-a-plus": {
    id: "comptia-a-plus",
    nome: "CompTIA A+",
    tempo: 90,
    perguntas: [
      {
        enunciado: "Qual componente é responsável pelo processamento central em um computador?",
        alternativas: ["HD", "RAM", "CPU", "Fonte de alimentação"],
        correta: 2
      },
      {
        enunciado: "O que é BIOS?",
        alternativas: ["Sistema operacional", "Firmware de inicialização", "Aplicativo de escritório", "Placa de vídeo"],
        correta: 1
      }
    ]
  },
  "comptia-security-plus": {
    id: "comptia-security-plus",
    nome: "CompTIA Security+",
    tempo: 90,
    perguntas: [
      {
        enunciado: "O que é autenticação multifator?",
        alternativas: ["Uso de duas ou mais formas de autenticação", "Acesso sem senha", "Apenas biometria", "Apenas senha"],
        correta: 0
      },
      {
        enunciado: "Qual é o objetivo do firewall?",
        alternativas: ["Aumentar a velocidade da internet", "Proteger a rede contra acessos não autorizados", "Gerenciar impressoras", "Armazenar arquivos"],
        correta: 1
      }
    ]
  },
  "lpi-essentials": {
    id: "lpi-essentials",
    nome: "LPI Linux Essentials",
    tempo: 60,
    perguntas: [
      {
        enunciado: "O que é o Linux?",
        alternativas: ["Sistema operacional", "Editor de texto", "Navegador web", "Planilha eletrônica"],
        correta: 0
      },
      {
        enunciado: "Qual comando exibe o diretório atual no Linux?",
        alternativas: ["ls", "cd", "pwd", "mkdir"],
        correta: 2
      }
    ]
  },
  "lpi-1": {
    id: "lpi-1",
    nome: "LPI LPIC-1",
    tempo: 90,
    perguntas: [
      {
        enunciado: "Qual comando é usado para listar arquivos em um diretório no Linux?",
        alternativas: ["ls", "cd", "rm", "touch"],
        correta: 0
      },
      {
        enunciado: "O que faz o comando 'chmod'?",
        alternativas: ["Altera permissões de arquivos", "Move arquivos", "Copia arquivos", "Exclui arquivos"],
        correta: 0
      }
    ]
  },
  // ...existing code...
