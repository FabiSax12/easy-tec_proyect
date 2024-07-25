-- CreateTable
CREATE TABLE "Carrier" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Carrier_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Subject" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Subject_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Campus" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Campus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Period" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,

    CONSTRAINT "Period_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CampusCarriers" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CampusSubjects" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Carrier_code_key" ON "Carrier"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Subject_code_key" ON "Subject"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Campus_code_key" ON "Campus"("code");

-- CreateIndex
CREATE UNIQUE INDEX "Period_code_key" ON "Period"("code");

-- CreateIndex
CREATE UNIQUE INDEX "_CampusCarriers_AB_unique" ON "_CampusCarriers"("A", "B");

-- CreateIndex
CREATE INDEX "_CampusCarriers_B_index" ON "_CampusCarriers"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CampusSubjects_AB_unique" ON "_CampusSubjects"("A", "B");

-- CreateIndex
CREATE INDEX "_CampusSubjects_B_index" ON "_CampusSubjects"("B");

-- AddForeignKey
ALTER TABLE "_CampusCarriers" ADD CONSTRAINT "_CampusCarriers_A_fkey" FOREIGN KEY ("A") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampusCarriers" ADD CONSTRAINT "_CampusCarriers_B_fkey" FOREIGN KEY ("B") REFERENCES "Carrier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampusSubjects" ADD CONSTRAINT "_CampusSubjects_A_fkey" FOREIGN KEY ("A") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampusSubjects" ADD CONSTRAINT "_CampusSubjects_B_fkey" FOREIGN KEY ("B") REFERENCES "Subject"("id") ON DELETE CASCADE ON UPDATE CASCADE;
