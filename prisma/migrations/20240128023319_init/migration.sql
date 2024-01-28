-- CreateTable
CREATE TABLE "Business" (
    "businessId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Business_pkey" PRIMARY KEY ("businessId")
);

-- CreateTable
CREATE TABLE "Click" (
    "clickId" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "fromBusinessId" INTEGER NOT NULL,
    "toBusinessId" INTEGER NOT NULL,

    CONSTRAINT "Click_pkey" PRIMARY KEY ("clickId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Business_name_key" ON "Business"("name");

-- AddForeignKey
ALTER TABLE "Click" ADD CONSTRAINT "Click_fromBusinessId_fkey" FOREIGN KEY ("fromBusinessId") REFERENCES "Business"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Click" ADD CONSTRAINT "Click_toBusinessId_fkey" FOREIGN KEY ("toBusinessId") REFERENCES "Business"("businessId") ON DELETE RESTRICT ON UPDATE CASCADE;
