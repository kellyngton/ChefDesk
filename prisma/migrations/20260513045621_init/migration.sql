-- CreateTable
CREATE TABLE "Cliente" (
    "id_cliente" SERIAL NOT NULL,
    "nome" VARCHAR(150) NOT NULL,
    "whatsapp" VARCHAR(20) NOT NULL,
    "email" VARCHAR(150),
    "cep" VARCHAR(10),
    "endereco" VARCHAR(255),

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id_cliente")
);

-- CreateTable
CREATE TABLE "Prato_Cardapio" (
    "id_prato" SERIAL NOT NULL,
    "nome" VARCHAR(100) NOT NULL,
    "categoria" VARCHAR(50) NOT NULL,
    "descricao" TEXT,
    "status" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Prato_Cardapio_pkey" PRIMARY KEY ("id_prato")
);

-- CreateTable
CREATE TABLE "Evento_Orcamento" (
    "id_evento" SERIAL NOT NULL,
    "id_cliente" INTEGER NOT NULL,
    "data_evento" TIMESTAMP(3) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,
    "bairro" VARCHAR(100),
    "tipo_local" VARCHAR(50) NOT NULL,
    "qtd_pessoas" INTEGER NOT NULL,
    "ocasiao" VARCHAR(100),
    "viabilidade_estrutura" TEXT,
    "restricoes_alimentares" TEXT,
    "valor_estimado_total" DECIMAL(10,2) NOT NULL,
    "status" VARCHAR(50) NOT NULL,
    "data_criacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Evento_Orcamento_pkey" PRIMARY KEY ("id_evento")
);

-- CreateTable
CREATE TABLE "Escolha_Menu" (
    "id_escolha" SERIAL NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "id_prato" INTEGER NOT NULL,
    "tipo_escolha" VARCHAR(50) NOT NULL,

    CONSTRAINT "Escolha_Menu_pkey" PRIMARY KEY ("id_escolha")
);

-- CreateTable
CREATE TABLE "Personalizacao_Servico" (
    "id_personalizacao" SERIAL NOT NULL,
    "id_evento" INTEGER NOT NULL,
    "tem_decoracao" BOOLEAN NOT NULL DEFAULT false,
    "qtd_garcons" INTEGER NOT NULL DEFAULT 1,
    "mudou_proteina" BOOLEAN NOT NULL DEFAULT false,
    "detalhes_proteina" TEXT,

    CONSTRAINT "Personalizacao_Servico_pkey" PRIMARY KEY ("id_personalizacao")
);

-- CreateTable
CREATE TABLE "Configuracao_Cockpit" (
    "id_config" SERIAL NOT NULL,
    "id_personalizacao" INTEGER NOT NULL,
    "chave" VARCHAR(100) NOT NULL,
    "valor" VARCHAR(255) NOT NULL,

    CONSTRAINT "Configuracao_Cockpit_pkey" PRIMARY KEY ("id_config")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personalizacao_Servico_id_evento_key" ON "Personalizacao_Servico"("id_evento");

-- CreateIndex
CREATE UNIQUE INDEX "Configuracao_Cockpit_id_personalizacao_key" ON "Configuracao_Cockpit"("id_personalizacao");

-- CreateIndex
CREATE UNIQUE INDEX "Configuracao_Cockpit_chave_key" ON "Configuracao_Cockpit"("chave");

-- AddForeignKey
ALTER TABLE "Evento_Orcamento" ADD CONSTRAINT "Evento_Orcamento_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "Cliente"("id_cliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Escolha_Menu" ADD CONSTRAINT "Escolha_Menu_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "Evento_Orcamento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Escolha_Menu" ADD CONSTRAINT "Escolha_Menu_id_prato_fkey" FOREIGN KEY ("id_prato") REFERENCES "Prato_Cardapio"("id_prato") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Personalizacao_Servico" ADD CONSTRAINT "Personalizacao_Servico_id_evento_fkey" FOREIGN KEY ("id_evento") REFERENCES "Evento_Orcamento"("id_evento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Configuracao_Cockpit" ADD CONSTRAINT "Configuracao_Cockpit_id_personalizacao_fkey" FOREIGN KEY ("id_personalizacao") REFERENCES "Personalizacao_Servico"("id_personalizacao") ON DELETE RESTRICT ON UPDATE CASCADE;
